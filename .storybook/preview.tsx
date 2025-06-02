// eslint-disable
// @ts-nocheck
import type {Preview} from '@storybook/nextjs'
import '../src/app/globals.css'

import React from 'react'

// Mock modules that depend on Node.js or database functionality
const mockModules = () => {
  // Mock database models
  try {
    require.cache[require.resolve('@/db/models/users/users')] = {
      exports: {
        getUserByClerkId: () => Promise.resolve(null),
      }
    };
  } catch (e) {
    // Module not found, that's okay
  }

  // Mock hooks that use database
  try {
    require.cache[require.resolve('@/hooks/use-punch-card-subscription')] = {
      exports: {
        usePunchCardSubscription: () => ({
          punchCards: [],
          isLoading: false,
          error: null,
        }),
      }
    };
  } catch (e) {
    // Module not found, that's okay
  }

  try {
    require.cache[require.resolve('@/hooks/useUserRaffleSubscription')] = {
      exports: {
        useUserRaffleSubscription: () => ({
          raffleEntries: [],
        }),
      }
    };
  } catch (e) {
    // Module not found, that's okay
  }
};

// Initialize mocks
mockModules();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },

  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => (
      <div
        style={{
          padding: '1rem',
          minHeight: '100vh',
          position: 'relative',
          backgroundColor: '#faf9f6',
          backgroundImage: 'radial-gradient(#e0e0e0 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs']
}

export default preview
