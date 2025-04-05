# QR Code Tracking and Analytics Implementation Plan

## 1. Current Implementation Analysis

The restaurant passport application already has a functional QR code system with the following components:

### QR Code Generation
- **Frontend Components**: 
  - `QRCodeGenerator` component renders QR codes with options to generate, save, and download
  - `QRCodeManager` provides different display variants (default, compact, table)
  - Bulk QR code generation functionality is available

### QR Code Storage
- QR codes are stored in the `restaurants` table with a `qrCodeUrl` field
- Server actions like `saveQRCodeUrl` and `saveBulkQRCodeUrls` save QR code URLs to the database

### QR Code Scanning
- Scanning endpoint at `/api/restaurants/[id]/scan`
- When scanned, the system:
  - Identifies the restaurant from the URL
  - Gets or creates a punch card for the user
  - Increments the punch card count
  - Handles completion logic when thresholds are met

### Analytics
- Basic Vercel Analytics integration exists in the application layout

### Limitations of Current Implementation
1. QR codes lack tracking parameters for analytics
2. No tracking of scan events beyond punch card updates
3. No visualization of QR code performance
4. Limited ability to track different QR code placements/campaigns
5. No structured analytics data collection

## 2. Enhanced QR Code Generation with Tracking Parameters

### 2.1 Database Schema Extensions

Create a new `qr_codes` table with the following fields:
```typescript
// In schema.ts
export const qrCodes = pgTable('qr_codes', {
  id: uuid('id').primaryKey().defaultRandom(),
  restaurantId: bigint('restaurant_id').notNull().references(() => restaurants.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  campaignId: text('campaign_id'),
  placementLocation: text('placement_location'),
  description: text('description'),
  totalScans: integer('total_scans').default(0),
  qrCodeUrl: text('qr_code_url').notNull(),
  qrCodeSvg: text('qr_code_svg')
});

export const qrScans = pgTable('qr_scans', {
  id: uuid('id').primaryKey().defaultRandom(),
  qrCodeId: uuid('qr_code_id').references(() => qrCodes.id),
  restaurantId: bigint('restaurant_id').references(() => restaurants.id),
  userId: bigint('user_id').references(() => users.id),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
  userAgent: text('user_agent'),
  deviceType: text('device_type'),
  browser: text('browser'),
  os: text('os'),
  utmSource: text('utm_source'),
  utmMedium: text('utm_medium'),
  utmCampaign: text('utm_campaign'),
  ipAddress: text('ip_address'),
  country: text('country'),
  region: text('region'),
  city: text('city'),
  sessionId: text('session_id')
});
```

### 2.2 Enhanced QR Code URL Structure

Update the QR code URL generation in `use-handle-qr-code.tsx` and `qr-code-generator.tsx` to include tracking parameters:

```typescript
// Updated function in use-handle-qr-code.tsx
function getDefaultQrCodeValue(
  restaurantId: bigint | number | string,
  options?: {
    campaignId?: string;
    placementLocation?: string;
  }
): string {
  const params = new URLSearchParams({
    utm_source: 'qr',
    utm_medium: 'physical',
    utm_campaign: options?.campaignId || 'default',
    location: options?.placementLocation || 'unknown',
    qr_id: crypto.randomUUID()
  });
  
  return `${typeof window !== 'undefined' ? window.location.origin : ''}/api/restaurants/${restaurantId}/scan?${params}`;
}
```

### 2.3 Enhanced QR Code Generator UI

Update the QR code generator component to collect additional metadata:

```typescript
// Addition to QRCodeGenerator
const [campaignId, setCampaignId] = useState('default');
const [placementLocation, setPlacementLocation] = useState('');

// Add form fields for collecting this data
<div className="space-y-2 mb-4">
  <div>
    <label className="block text-sm font-medium">Campaign</label>
    <input
      type="text"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
      value={campaignId}
      onChange={(e) => setCampaignId(e.target.value)}
      placeholder="e.g., summer_2023, window_display"
    />
  </div>
  <div>
    <label className="block text-sm font-medium">Placement Location</label>
    <input
      type="text"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
      value={placementLocation}
      onChange={(e) => setPlacementLocation(e.target.value)}
      placeholder="e.g., entrance, table, menu"
    />
  </div>
</div>
```

## 3. Backend Implementation for Tracking Scan Events

### 3.1 Enhance the Scan Endpoint

Modify the scan endpoint to capture and store analytics data:

```typescript
// In src/app/api/restaurants/[id]/scan/route.ts
export async function POST(request: Request) {
  try {
    // Current implementation
    const restaurantId = request.url.match(/restaurants\/(\d+)\/scan/)?.[1] ?? "";
    const body = await request.json();
    
    // Extract URL parameters
    const url = new URL(request.url);
    const qrId = url.searchParams.get('qr_id') || '';
    const utmSource = url.searchParams.get('utm_source') || '';
    const utmMedium = url.searchParams.get('utm_medium') || '';
    const utmCampaign = url.searchParams.get('utm_campaign') || '';
    const location = url.searchParams.get('location') || '';
    
    // Extract user agent information
    const userAgent = request.headers.get('user-agent') || '';
    
    // Create scan record with analytics data
    await db.insert(qrScans).values({
      qrCodeId: qrId,
      restaurantId: BigInt(restaurantId),
      userId: body?.userId ? BigInt(body.userId) : null,
      userAgent,
      deviceType: detectDeviceType(userAgent),
      browser: detectBrowser(userAgent),
      os: detectOS(userAgent),
      utmSource,
      utmMedium, 
      utmCampaign,
      ipAddress: getIpAddress(request),
      sessionId: getOrCreateSessionId(request),
    });
    
    // Increment scan count for the QR code
    if (qrId) {
      await db.execute(sql`
        UPDATE qr_codes 
        SET total_scans = total_scans + 1 
        WHERE id = ${qrId}
      `);
    }
    
    // Continue with the existing punch card logic
    // ...
  } catch (error) {
    // Error handling
  }
}
```

### 3.2 Implement Helper Functions for Data Extraction

```typescript
// Helper functions for scan data extraction
function detectDeviceType(userAgent: string): string {
  if (/Mobile|Android|iPhone/i.test(userAgent)) return 'mobile';
  if (/iPad|Tablet/i.test(userAgent)) return 'tablet';
  return 'desktop';
}

function detectBrowser(userAgent: string): string {
  if (/Chrome/i.test(userAgent)) return 'Chrome';
  if (/Firefox/i.test(userAgent)) return 'Firefox';
  if (/Safari/i.test(userAgent)) return 'Safari';
  if (/Edge/i.test(userAgent)) return 'Edge';
  return 'Other';
}

function detectOS(userAgent: string): string {
  if (/Windows/i.test(userAgent)) return 'Windows';
  if (/Mac OS/i.test(userAgent)) return 'macOS';
  if (/Android/i.test(userAgent)) return 'Android';
  if (/iOS/i.test(userAgent)) return 'iOS';
  return 'Other';
}

function getIpAddress(request: Request): string {
  // Implementation depends on your hosting environment
  // For Vercel, you might use the x-forwarded-for header
  return request.headers.get('x-forwarded-for') || '';
}

function getOrCreateSessionId(request: Request): string {
  // Implementation to get or create a unique session ID
  // Could use cookies or other mechanisms
  return crypto.randomUUID();
}
```

### 3.3 Create Analytics Service

```typescript
// src/services/analytics-service.ts
import { db } from "@/db/db";
import { qrScans, qrCodes } from "@/db/drizzle/schema";
import { sql, count, eq, and, gte, lte } from "drizzle-orm";

export type TimeRange = 'day' | 'week' | 'month' | 'year' | 'all';
export type GroupBy = 'day' | 'hour' | 'week' | 'month';

export async function getQRScanCounts(
  restaurantId?: string,
  timeRange: TimeRange = 'all',
  groupBy: GroupBy = 'day'
) {
  // Build time range filter
  const timeFilter = buildTimeRangeFilter(timeRange);
  
  // Build the query
  let query = db
    .select({
      count: count(),
      period: buildPeriodExpression(groupBy),
    })
    .from(qrScans);
  
  // Add time filter if provided
  if (timeFilter) {
    query = query.where(timeFilter);
  }
  
  // Add restaurant filter if provided
  if (restaurantId) {
    query = query.where(eq(qrScans.restaurantId, BigInt(restaurantId)));
  }
  
  // Group by period
  query = query.groupBy(sql`period`).orderBy(sql`period`);
  
  return await query;
}

// Additional analytics functions would follow...
```

## 4. Analytics Integration

### 4.1 Vercel Analytics Integration

Extend the existing Vercel Analytics integration:

```typescript
// src/hooks/use-analytics.ts
import { track } from '@vercel/analytics';

export function useAnalytics() {
  // Track QR code scan events
  const trackQRScan = (data: {
    restaurantId: string;
    qrId?: string;
    campaign?: string;
    location?: string;
  }) => {
    track('qr_code_scan', data);
  };
  
  // Track QR code generation events
  const trackQRGeneration = (data: {
    restaurantId: string;
    campaign?: string;
    location?: string;
  }) => {
    track('qr_code_generate', data);
  };
  
  // Track punch card completion events
  const trackPunchCardComplete = (data: {
    restaurantId: string;
    userId: string;
  }) => {
    track('punch_card_complete', data);
  };
  
  return {
    trackQRScan,
    trackQRGeneration,
    trackPunchCardComplete,
  };
}
```

### 4.2 Google Analytics 4 Integration

```typescript
// src/components/analytics/google-analytics.tsx
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: pathname,
      });
    }
  }, [pathname, searchParams, measurementId]);
  
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
}

// Event tracking helper
export function trackGA4Event(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}
```

### 4.3 Update Scan Endpoint with Analytics Integration

```typescript
// In scan route handler
import { trackGA4Event } from '@/components/analytics/google-analytics';
import { track } from '@vercel/analytics';

// After processing the scan...
// Track with Vercel Analytics
track('qr_code_scan', {
  restaurantId: restaurantId,
  qrId: qrId,
  campaign: utmCampaign,
  location: location
});

// Track with GA4
trackGA4Event('qr_code_scan', {
  restaurant_id: restaurantId,
  qr_code_id: qrId,
  campaign: utmCampaign,
  placement: location
});
```

## 5. Data Visualization and Analytics Dashboard

### 5.1 Analytics Dashboard Components

```typescript
// src/app/admin/analytics/page.tsx
import { QRCodeAnalyticsDashboard } from '@/components/admin/analytics/qr-code-analytics-dashboard';
import { getAdminRestaurants } from '@/db/models/restaurants/restaurants';

export default async function AnalyticsPage() {
  // Fetch restaurants for filtering
  const restaurants = await getAdminRestaurants();
  
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">QR Code Analytics</h1>
      <QRCodeAnalyticsDashboard restaurants={restaurants} />
    </div>
  );
}
```

### 5.2 QR Code Analytics Dashboard Component

```typescript
// src/components/admin/analytics/qr-code-analytics

