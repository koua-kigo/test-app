# QR Code Tracking and Analytics System Implementation Plan

## 1. Current System Overview and Limitations

The restaurant passport application currently implements a basic QR code system with the following components:

### Existing Functionality
- **QR Code Generation**: The application includes `QRCodeGenerator` and `QRCodeManager` components that support generating, saving, and downloading QR codes, including bulk generation.
- **QR Code Storage**: QR codes are stored in the `restaurants` table with `qrCodeUrl` and `qrCodeSvg` fields.
- **QR Code Scanning**: The API endpoint at `/api/restaurants/[id]/scan` processes scans by:
  - Identifying the restaurant from the URL
  - Getting or creating a punch card for the user
  - Incrementing the punch card count
  - Managing completion logic

### Current Limitations
1. **Limited Tracking Parameters**: QR codes lack UTM parameters and unique identifiers necessary for analytics.
2. **No Scan Event Tracking**: The system only tracks punch card updates, not the actual scan events with metadata.
3. **Missing Analytics Integration**: While basic Vercel Analytics is integrated, there's no structured collection of QR code performance data.
4. **No Campaign Tracking**: Cannot distinguish between different QR code placements or campaigns.
5. **Lack of Visualization**: No dashboard exists to analyze scan patterns and performance metrics.

## 2. Enhanced QR Code Tracking and Analytics Implementation

### 2.1 Enhanced QR Code Generation with Tracking Parameters

The updated QR code generation will include tracking parameters embedded in the URLs:

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

The QR code generator UI will be enhanced to collect additional metadata:

```tsx
// In QRCodeGenerator component
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

### 2.2 Database Schema Extensions

Two new tables will be added to the database schema to track QR codes and scan events:

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

### 2.3 Backend Implementation for Scan Event Tracking

The scan endpoint will be enhanced to capture and store analytics data:

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

Helper functions will be implemented for user agent parsing and data extraction:

```typescript
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
```

### 2.4 Analytics Service Implementation

A dedicated analytics service will be developed to query and aggregate the scan data:

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
  
  // Add filters and group by
  if (timeFilter) {
    query = query.where(timeFilter);
  }
  
  if (restaurantId) {
    query = query.where(eq(qrScans.restaurantId, BigInt(restaurantId)));
  }
  
  query = query.groupBy(sql`period`).orderBy(sql`period`);
  
  return await query;
}
```

### 2.5 Analytics Integrations

#### Vercel Analytics Integration

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
  
  return {
    trackQRScan,
    trackQRGeneration,
    trackPunchCardComplete,
  };
}
```

#### Google Analytics 4 Integration

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
```

### 2.6 Data Visualization Dashboard

```typescript
// src/app/admin/analytics/page.tsx
import { QRCodeAnalyticsDashboard } from '@/components/admin/analytics/qr-code-analytics-dashboard';
import { getAdminRestaurants } from '@/db/models/restaurants/restaurants';

export default async function AnalyticsPage() {
  const restaurants = await getAdminRestaurants();
  
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">QR Code Analytics</h1>
      <QRCodeAnalyticsDashboard restaurants={restaurants} />
    </div>
  );
}

// src/components/admin/analytics/qr-code-analytics-dashboard.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { getQRScanCounts } from '@/services/analytics-service';
import { Chart } from 'chart.js';

export function QRCodeAnalyticsDashboard({ restaurants }) {
  const [scanData, setScanData] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('all');
  const [timeRange, setTimeRange] = useState('month');

  useEffect(() => {
    async function fetchData() {
      const data = await getQRScanCounts(
        selectedRestaurant !== 'all' ? selectedRestaurant : undefined,
        timeRange
      );
      setScanData(data);
    }
    fetchData();
  }, [selectedRestaurant, timeRange]);

  return (
    <div className="analytics-dashboard">
      {/* Filters */}
      <div className="filters mb-6 flex gap-4">
        <select
          value={selectedRestaurant}
          onChange={(e) => setSelectedRestaurant(e.target.value)}
          className="rounded border p-2"
        >
          <option value="all">All Restaurants</option>
          {restaurants.map(r => (
            <option key={r.id} value={r.id.toString()}>{r.name}</option>
          ))}
        </select>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value as any)}
          className="rounded border p-2"
        >
          <option value="day">Last 24 Hours</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last 12 Months</option>
          <option value="all">All Time</option>
        </select>
      </div>
      
      {/* Charts and statistics will be implemented here */}
      {/* Example of a chart container */}
      <div className="chart-container h-80 w-full">
        {/* Chart.js or similar visualization will be rendered here */}
      </div>
    </div>
  );
}
```

## 3. Benefits of Implementation

The enhanced QR code tracking and analytics system will provide numerous benefits to the restaurant passport application:

1. **Data-Driven Decision Making**: Restaurant owners can make informed decisions based on scan patterns and user behavior.

2. **Campaign Performance Tracking**: Ability to measure the effectiveness of different QR code placements and marketing campaigns.

3. **User Engagement Insights**: Understanding which restaurants generate the most engagement and at what times.

4. **Better User Experience**: Targeting improvements based on user device analytics and scan patterns.

5. **ROI Measurement**: Quantifying the return on investment for various marketing initiatives using QR codes.

6. **Operational Optimization**: Identifying peak scanning times to optimize staffing and operational decisions.

7. **Enhanced Reporting**: Generating detailed reports on QR code performance across different campaigns, locations, and time periods to share with stakeholders.

8. **Competitive Analysis**: Comparing performance metrics across different restaurants to identify best practices and improvement opportunities.

## 4. Implementation Timeline

The implementation will be completed in phases over an 8-week period:

### Phase 1: Database and Schema Updates (Weeks 1-2)

- Create new database tables (`qr_codes` and `qr_scans`)
- Implement database migrations
- Set up initial data access patterns
- Create unit tests for database operations

### Phase 2: Enhanced QR Code Generation (Weeks 3-4)

- Update QR code generation logic to include tracking parameters
- Enhance QR code generator UI to collect campaign and placement data
- Implement bulk QR code generation with tracking parameters
- Create QR code management interface for existing codes

### Phase 3: Analytics Tracking Implementation (Weeks 5-6)

- Update scan endpoint to capture and store analytics data
- Implement helper functions for data extraction and enrichment
- Develop analytics service for data querying and aggregation
- Integrate with Vercel Analytics and Google Analytics 4
- Set up event tracking across the application

### Phase 4: Dashboard Development (Weeks 7-8)

- Create admin analytics dashboard
- Implement visualization components for scan metrics
- Develop filtering and time range selection functionality
- Add export capabilities for reports
- Perform user testing and optimization

## 5. Privacy and Security Considerations

### Data Collection and Storage

- **Data Anonymization**: All collected data will be anonymized by default. IP addresses will be hashed or truncated to comply with privacy regulations.

- **Consent Management**: Implement a user consent system for analytics tracking that complies with GDPR, CCPA, and other privacy regulations.

- **Data Retention Policies**: Implement automated data retention policies to purge scan data older than 24 months, with configurable retention periods per data category.

```typescript
// src/services/privacy-service.ts
export async function anonymizeIpAddress(ipAddress: string): Promise<string> {
  // For IPv4, remove last octet
  if (ipAddress.includes('.')) {
    return ipAddress.replace(/\.\d+$/, '.0');
  }
  // For IPv6, remove last 80 bits (last 20 hex chars)
  if (ipAddress.includes(':')) {
    return ipAddress.replace(/:[0-9a-f:]+$/, ':0000');
  }
  return ipAddress;
}

export async function purgeExpiredScanData(): Promise<void> {
  const retentionPeriod = process.env.DATA_RETENTION_DAYS || '730'; // Default 24 months
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - parseInt(retentionPeriod));
  
  await db.delete(qrScans).where(lt(qrScans.timestamp, cutoffDate.toISOString()));
}
```

### Secure Data Transmission

- **HTTPS Enforcement**: All QR code URLs will use HTTPS protocol to ensure secure data transmission.

- **API Security**: Implement rate limiting and appropriate authentication for all analytics endpoints.

```typescript
// Middleware for API security
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if request is for analytics API
  if (request.nextUrl.pathname.startsWith('/api/analytics')) {
    // Verify authentication
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token || !verifyApiToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Apply rate limiting
    const ipAddress = request.headers.get('x-forwarded-for') || '';
    if (isRateLimited(ipAddress)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
  }
  
  return NextResponse.next();
}
```

### User Privacy Controls

- **Opt-Out Mechanism**: Provide users with the ability to opt-out of analytics tracking.

- **Privacy Policy**: Update the application's privacy policy to clearly communicate data collection practices.

```typescript
// src/hooks/use-privacy-settings.ts
import { useState, useEffect } from 'react';

export function usePrivacySettings() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(true);
  
  useEffect(() => {
    // Load settings from localStorage
    const storedSetting = localStorage.getItem('analytics_opt_in');
    if (storedSetting !== null) {
      setAnalyticsEnabled(storedSetting === 'true');
    }
  }, []);
  
  const updateAnalyticsPreference = (enabled: boolean) => {
    localStorage.setItem('analytics_opt_in', String(enabled));
    setAnalyticsEnabled(enabled);
    
    // Disable tracking if user opts out
    if (!enabled && typeof window !== 'undefined') {
      window['ga-disable-' + process.env.NEXT_PUBLIC_GA_ID] = true;
    }
  };
  
  return {
    analyticsEnabled,
    updateAnalyticsPreference,
  };
}
```

## 6. Conclusion

The implementation of QR code tracking and analytics will transform the restaurant passport application from a basic QR-based system to a comprehensive analytics platform. By enhancing QR code generation with tracking parameters, extending the database schema, and implementing robust analytics integrations, the application will provide valuable insights into user engagement and campaign performance.

Key takeaways from this implementation plan:

- The architecture maintains a clean separation of concerns, with dedicated components for QR code generation, scan processing, data storage, and visualization.

- The system is designed to scale with the application, supporting a growing number of restaurants and QR codes.

- Privacy and security considerations are integrated from the beginning, ensuring compliance with regulations and best practices.

- The implementation timeline allows for iterative development and testing, with clear milestones and deliverables.

Upon completion, restaurant owners and administrators will have access to comprehensive analytics that inform their marketing and operational decisions, ultimately enhancing the value proposition of the restaurant passport application.
