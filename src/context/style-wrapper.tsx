'use client'
import {useMediaQuery} from 'usehooks-ts'

export const StyleWrapper = ({children}: {children: React.ReactNode}) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div
      id='app'
      className='fixed top-0 left-0 right-0 z-10 w-screen overflow-x-hidden px-safe py-safe'
      style={{
        height: isMobile ? '100vh' : 'calc(100vh - 80px)',
        overflowY: isMobile ? 'auto' : 'scroll',
      }}
    >
      {children}
    </div>
  )
}
