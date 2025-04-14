# Local Supabase Client with Batch Scripts

This guide explains how to use the local Supabase client and batch scripts to create test users and punch card records for development purposes.

## Overview

These scripts provide a convenient way to:
- Set up a local Supabase instance
- Create multiple test users with various roles (regular, staff, admin)
- Generate punch cards for users with configurable parameters
- Verify your database schema with realistic test data

## Prerequisites

- Docker installed and running
- Supabase CLI installed (`supabase -v` to check)
- Node.js and npm

## Setup Instructions

1. **Run the setup script:**

   ```bash
   node scripts/supabase-batch/setup.js
   ```

   This script will:
   - Install required dependencies (@faker-js/faker, nanoid, commander)
   - Update package.json with new npm scripts
   - Check and update your .env file with required variables

2. **Start your local Supabase instance:**

   ```bash
   npm run supabase:local
   ```

   This requires Docker to be running. The first time may take a few minutes as it downloads required Docker images.

3. **Check Supabase status:**

   ```bash
   npm run supabase:status
   ```

   This will show if Supabase is running correctly and provide your anon key.
   
4. **Update your .env file with the anon key:**

   Make sure your .env file has these variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key-from-status-command>
   DATABASE_URL=postgres://postgres:postgres@localhost:54322/postgres
   ```

## Using the Batch Scripts

### Creating Test Users

Use this command to create test users:

```bash
npm run batch:create-users -- --count 20 --staff 5 --admin 2 --prefix "test-user"
```

Options:
- `--count` or `-c`: Total number of users to create (default: 10)
- `--staff` or `-s`: Number of users to mark as staff (default: 0)
- `--admin` or `-a`: Number of users to mark as admin (default: 0)
- `--prefix` or `-p`: Prefix for user names (default: "test-user")

The script will:
- Generate fake Clerk IDs for local testing
- Create unique email addresses based on the prefix
- Set appropriate staff and admin flags
- Skip any users with emails that already exist

### Creating Test Punch Cards

Use this command to create test punch cards:

```bash
npm run batch:create-punch-cards -- --count 3 --users 20 --punches 0-10 --completed 25
```

Options:
- `--count` or `-c`: Number of punch cards to create per user (default: 3)
- `--users` or `-u`: Number of users to create punch cards for (default: 10)
- `--punches` or `-p`: Range of punches in format "min-max" (default: "0-5")
- `--completed`: Percentage of cards marked as completed (default: 20)

The script will:
- Find existing users and restaurants in your database
- Create punch cards linking users and restaurants
- Set random punch counts within your specified range
- Mark a percentage of cards as completed
- Skip any user-restaurant combinations that already have punch cards

## Advanced Usage

### Direct Script Execution

You can also run the scripts directly with positional arguments:

```bash
node scripts/supabase-batch/batch-create-users.js 20 5 2
```
Arguments: `<totalCount> <staffCount> <adminCount>`

```bash
node scripts/supabase-batch/batch-create-punch-cards.js 3 20 0 10 25
```
Arguments: `<cardsPerUser> <userCount> <minPunches> <maxPunches> <completedPercentage>`

### Viewing Your Data

You can access the Supabase Studio at http://localhost:54323 to:
- View and edit your data
- Run SQL queries
- Check database schema
- Test API functionality

## Troubleshooting

### Supabase Won't Start

If Supabase won't start, ensure Docker is running:

```bash
docker ps
```

If Docker is not running, start it and try again.

### Missing Dependencies

If you see errors about missing modules, run the setup script again:

```bash
node scripts/supabase-batch/setup.js
```

### Database Connection Issues

Check your .env file has the correct URLs and keys. The default values should be:

```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
DATABASE_URL=postgres://postgres:postgres@localhost:54322/postgres
```

You can get your anon key by running `npm run supabase:status`.

### Stopping Supabase

When you're done, you can stop the local Supabase instance:

```bash
npm run supabase:stop
```

## Notes

- These scripts are for local development only
- The scripts check for existing records to avoid duplicates
- Users are created with fake Clerk IDs for local testing
