// eslint-disable
// @ts-nocheck
import type {Preview} from '@storybook/react'
import '../src/app/globals.css'

import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
}

export default preview
