import type {Preview} from '@storybook/react'
import '../src/app/globals.css'
import {LocationProvider} from '../src/context/location-context'
import {Toaster} from '../src/components/ui/sonner'
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
    (Story, {parameters}) => {
      // 👇 Make it configurable by reading from parameters
      const {pageLayout} = parameters
      switch (pageLayout) {
        case 'page':
          return (
            <div
              style={{
                padding: '1rem',
                minHeight: '100vh',
                position: 'relative',
                backgroundColor: '#faf9f6',
                backgroundImage:
                  'radial-gradient(#e0e0e0 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            >
              <div style={{position: 'relative', zIndex: 10}}>
                <LocationProvider>
                  <Story />
                  <Toaster />
                </LocationProvider>
              </div>
            </div>
          )
        case 'page-mobile':
          return (
            <div
              style={{
                padding: '0.5rem',
                maxWidth: '480px',
                margin: '0 auto',
                minHeight: '100vh',
                position: 'relative',
                backgroundColor: '#faf9f6',
                backgroundImage:
                  'radial-gradient(#e0e0e0 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            >
              <div style={{position: 'relative', zIndex: 10}}>
                <LocationProvider>
                  <Story />
                  <Toaster />
                </LocationProvider>
              </div>
            </div>
          )
        default:
          // In the default case, just wrap with LocationProvider without additional styling
          return (
            <LocationProvider>
              <Story />
            </LocationProvider>
          )
      }
    },
  ],
}

export default preview
