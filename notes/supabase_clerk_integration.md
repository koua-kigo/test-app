# Supabase Integration with Clerk Middleware

## To-Do

- Create JWT template in Clerk Dashboard named "supabase"
- Install Supabase client library (`@supabase/supabase-js`)
- Set up environment variables for Supabase
- Implement authenticated Supabase clients (server and client side)
- Configure Row Level Security (RLS) in Supabase

## Implementation Notes

- Use `auth().getToken({ template: "supabase" })` to get JWT for Supabase
- Configure Row Level Security (RLS) in Supabase with JWT claims
- Update client initialization to pass auth token when available

## Code Snippets

### Server-side Supabase Authentication (with linter error fixes)

```typescript
// For server-side usage
export async function getAuthenticatedSupabaseClient() {
  // Fix: need to await auth() first
  const { getToken } = await auth();
  const supabaseToken = await getToken({ template: "supabase" });

  // Fix: add null checks for environment variables
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: { Authorization: `Bearer ${supabaseToken}` },
    },
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  });
}
```

### Client-side Supabase Authentication

```typescript
// For client-side usage (in component)
export function createClerkSupabaseClient(
  getToken: () => Promise<string | null>,
) {
  // Fix: add null checks for environment variables
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: async (url, options = {}) => {
        const token = await getToken();

        const headers = new Headers(options?.headers);
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }

        return fetch(url, {
          ...options,
          headers,
        });
      },
    },
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  });
}
```

### Example Usage in Client Component

```typescript
'use client'
import { createClerkSupabaseClient } from '@/db/supabase';
import { useSession } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function SupabaseExample() {
  const { session } = useSession();
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if (!session) return;
    
    async function fetchData() {
      const supabase = createClerkSupabaseClient(async () => {
        return session ? await session.getToken({ template: 'supabase' }) : null;
      });
      
      const { data, error } = await supabase.from('your_table').select('*');
      if (!error) {
        setData(data);
      }
    }
    
    fetchData();
  }, [session]);
  
  return (
    <div>
      {/* Render your data */}
    </div>
  );
}
```

### Example Usage in Server Component or API Route

```typescript
import { getAuthenticatedSupabaseClient } from '@/db/supabase';

export async function getData() {
  const supabase = await getAuthenticatedSupabaseClient();
  const { data, error } = await supabase.from('your_table').select('*');
  
  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }
  
  return data;
}
```

## Required Supabase Setup

1. In Supabase SQL Editor, create a `requesting_user_id()` function:

```sql
create or replace function requesting_user_id() returns text as $$
  select nullif(current_setting('request.jwt.claims', true)::json->>'sub', '')::text;
$$ language sql stable;
```

2. Create Row Level Security policies for your tables:

```sql
-- Enable RLS
alter table your_table enable row level security;

-- Create policies
create policy "Users can view their own data" on your_table
  for select using (auth.uid() = user_id);

create policy "Users can insert their own data" on your_table
  for insert with check (auth.uid() = user_id);
```

## Resources

- [Clerk Supabase Integration Documentation](https://clerk.com/docs/integrations/databases/supabase)
- [Supabase Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Next.js with Supabase](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
