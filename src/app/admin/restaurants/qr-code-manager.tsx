'use client'

import type React from 'react'
import {useState, useRef, useEffect} from 'react'
import QRCode from 'react-qr-code'
import Image from 'next/image'
import {useHandleQRCode} from '@/hooks/use-handle-qrCode'
import type {Restaurant} from '@/types/db'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
import {
  QrCode,
  Download,
  Plus,
  X,
  Check,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react'
import {Alert, AlertTitle, AlertDescription} from '@/components/ui/alert'

type QRCodeVariant = 'default' | 'compact' | 'table'

interface QRCodeManagerProps {
  restaurant: Restaurant
  variant?: QRCodeVariant
  onUpdate?: () => void
}

// Explicitly define the hook props type here to avoid the any type cast
type SingleModeProps = {
  restaurant: Restaurant
  mode: 'single'
}

// Download function to convert SVG to PNG
const downloadQRCodeFromElement = (
  element: HTMLDivElement | null,
  restaurantName: string
) => {
  if (!element) return
  try {
    const svgElement = element.querySelector('svg')
    if (!svgElement) {
      console.error('SVG element not found')
      return
    }
    // Ensure white background
    svgElement.setAttribute('style', 'background-color: white')
    // Serialize SVG
    const svgData = new XMLSerializer().serializeToString(svgElement)
    // Create a blob from SVG data
    const svgBlob = new Blob([svgData], {
      type: 'image/svg+xml;charset=utf-8',
    })
    const url = URL.createObjectURL(svgBlob)

    const image = document.createElement('img')
    image.crossOrigin = 'anonymous'
    image.onload = () => {
      const canvas = document.createElement('canvas')
      // Attempt to get width/height from SVG attributes, fallback to image dimensions
      const widthAttr = svgElement.getAttribute('width')
      const heightAttr = svgElement.getAttribute('height')
      const width = widthAttr ? Number.parseInt(widthAttr) : image.width
      const height = heightAttr ? Number.parseInt(heightAttr) : image.height
      canvas.width = width
      canvas.height = height
      const context = canvas.getContext('2d')
      if (!context) {
        console.error('Unable to get canvas context')
        return
      }
      // Fill canvas with white background
      context.fillStyle = '#ffffff'
      context.fillRect(0, 0, width, height)
      context.drawImage(image, 0, 0, width, height)
      URL.revokeObjectURL(url)
      const pngDataUrl = canvas.toDataURL('image/png')
      const filename = `${restaurantName
        .replace(/\s+/g, '-')
        .toLowerCase()}-qrcode.png`
      const link = document.createElement('a')
      link.href = pngDataUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    image.addEventListener('error', (event: Event) => {
      console.error('Error loading SVG as image', event)
    })
    image.src = url
  } catch (err) {
    console.error('Direct PNG download failed:', err)
  }
}

export function QRCodeManager({
  restaurant,
  variant = 'default',
  onUpdate,
}: QRCodeManagerProps) {
  // Use proper typing for the hook props
  const {
    qrCodeDataUrl,
    qrCodeValue,
    handleGenerate,
    handleCancel,
    handleDownload,
    handleSave: originalHandleSave,
    generating,
    saving,
    success,
    error,
    qrRef,
  } = useHandleQRCode({restaurant, mode: 'single'} as SingleModeProps)

  // Use effect to monitor success state changes and call onUpdate
  useEffect(() => {
    if (success && onUpdate) {
      onUpdate()
    }
  }, [success, onUpdate])

  // Pass through the original handleSave
  const handleSave = originalHandleSave

  // Check for downloadSupported
  const [downloadSupported, setDownloadSupported] = useState(true)

  // Check browser support for download functionality
  useEffect(() => {
    // Safari before 14 and some mobile browsers might have issues with download API
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

    // iOS Safari before 14 had issues with download
    const isUnsupportedSafari =
      isSafari && isIOS && /OS 11|OS 12|OS 13/.test(navigator.userAgent)

    setDownloadSupported(!isUnsupportedSafari)
  }, [])

  // Table cell variant
  if (variant === 'table') {
    // Create ref for the QR code in dialog
    const tableQrRef = useRef<HTMLDivElement>(null)

    // Direct download function
    const handleTableDownload = () => {
      const dialogElement = document.querySelector('[role="dialog"]')
      // Find QR code container within the dialog
      const qrContainer = dialogElement?.querySelector(
        '[data-qr-container="true"]'
      )
      if (qrContainer instanceof HTMLDivElement) {
        downloadQRCodeFromElement(qrContainer, restaurant.name)
      } else {
        downloadQRCodeFromElement(tableQrRef.current, restaurant.name)
      }
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='flex items-center gap-1 px-2 h-8 touch-manipulation'
          >
            {restaurant.qrCodeUrl ? (
              <>
                <div
                  className='relative w-8 h-8 shrink-0 bg-white p-1 rounded'
                  ref={tableQrRef}
                >
                  <QRCode
                    value={qrCodeValue}
                    size={32}
                    viewBox='0 0 32 32'
                    className='w-full h-full'
                  />
                </div>
                <span className='text-xs truncate'>View QR</span>
              </>
            ) : (
              <>
                <Plus className='h-4 w-4' />
                <span className='text-xs'>Generate QR</span>
              </>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className='max-w-md p-6'>
          <DialogHeader>
            <DialogTitle>
              {restaurant.qrCodeUrl
                ? 'Restaurant QR Code'
                : 'Create Restaurant QR Code'}
            </DialogTitle>
          </DialogHeader>

          {/* Simplified QR Code Content */}
          <div className='space-y-4'>
            {restaurant.qrCodeUrl ? (
              // Existing QR code display
              <div className='space-y-4'>
                <div
                  className='border border-gray-200 rounded-lg p-4 bg-white mx-auto'
                  ref={tableQrRef}
                  data-qr-container='true'
                >
                  <QRCode
                    size={200}
                    value={qrCodeValue}
                    viewBox='0 0 200 200'
                    className='w-48 h-48'
                  />
                </div>

                <p className='text-sm text-gray-600'>
                  This QR code links to:{' '}
                  <span className='font-mono text-xs break-all'>
                    {qrCodeValue}
                  </span>
                </p>

                <div className='flex flex-wrap gap-2 justify-center'>
                  <Button onClick={handleTableDownload} className='gap-1'>
                    <Download className='h-4 w-4' />
                    Download QR Code
                  </Button>

                  <Button
                    onClick={handleGenerate}
                    variant='outline'
                    className='gap-1'
                  >
                    <QrCode className='h-4 w-4' />
                    Generate New QR Code
                  </Button>
                </div>
              </div>
            ) : generating ? (
              // QR code generation state
              <div className='space-y-4'>
                <div
                  className='mb-4 p-4 bg-white border border-gray-200 rounded-lg mx-auto'
                  ref={qrRef}
                >
                  <QRCode
                    size={200}
                    value={qrCodeValue}
                    viewBox='0 0 200 200'
                    className='w-48 h-48'
                  />
                </div>

                <p className='text-sm text-gray-600'>
                  This QR code will link to:{' '}
                  <span className='font-mono text-xs break-all'>
                    {qrCodeValue}
                  </span>
                </p>

                <div className='flex justify-center gap-3'>
                  <Button
                    onClick={handleSave}
                    disabled={saving}
                    className='gap-1'
                  >
                    <Check className='h-4 w-4' />
                    {saving ? 'Saving...' : 'Save QR Code'}
                  </Button>

                  <Button
                    onClick={handleCancel}
                    disabled={saving}
                    variant='outline'
                    className='gap-1'
                  >
                    <X className='h-4 w-4' />
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              // Initial state - no QR code yet
              <div className='text-center space-y-4 py-4'>
                <p className='text-gray-600'>
                  Create a QR code that customers can scan to check in at this
                  restaurant.
                </p>
                <Button onClick={handleGenerate} className='gap-1 mx-auto'>
                  <QrCode className='h-4 w-4' />
                  Generate QR Code
                </Button>
              </div>
            )}

            {/* Error message */}
            {error && (
              <Alert variant='destructive' className='mt-4'>
                <AlertTriangle className='h-4 w-4' />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Success message */}
            {success && (
              <Alert
                variant='success'
                className='mt-4 bg-green-50 border-green-200 text-green-700'
              >
                <Check className='h-4 w-4' />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>QR code saved successfully!</AlertDescription>
              </Alert>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Compact variant for smaller spaces
  if (variant === 'compact') {
    // Create a ref for the displayed QR code
    const compactQrRef = useRef<HTMLDivElement>(null)

    // Direct download function for the compact QR code
    const handleCompactDownload = () => {
      downloadQRCodeFromElement(compactQrRef.current, restaurant.name)
    }

    return (
      <div className='flex flex-col sm:flex-row gap-2 items-center'>
        {restaurant.qrCodeUrl ? (
          <div className='flex flex-col sm:flex-row gap-3 items-center'>
            <div
              className='relative w-16 h-16 shrink-0 bg-white p-2 rounded-md'
              ref={compactQrRef}
            >
              <QRCode
                size={64}
                value={qrCodeValue}
                viewBox='0 0 64 64'
                className='w-full h-full'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Button
                size='sm'
                variant='outline'
                className='text-xs h-8 min-h-[32px] touch-manipulation'
                onClick={handleGenerate}
              >
                New QR
              </Button>
              {downloadSupported && (
                <>
                  <Button
                    size='sm'
                    variant='outline'
                    className='text-xs h-8 min-h-[32px] touch-manipulation'
                    onClick={handleCompactDownload}
                  >
                    <Download className='h-3 w-3 mr-1' />
                    Download Exact
                  </Button>
                  <Button
                    size='sm'
                    variant='outline'
                    className='text-xs h-8 min-h-[32px] touch-manipulation'
                    onClick={handleDownload}
                  >
                    <Download className='h-3 w-3 mr-1' />
                    Download Original
                  </Button>
                </>
              )}
            </div>
          </div>
        ) : (
          <Button
            size='sm'
            onClick={handleGenerate}
            className='text-xs min-h-[32px] touch-manipulation'
          >
            <QrCode className='h-3 w-3 mr-1' />
            Generate QR
          </Button>
        )}

        {generating && (
          <div className='mt-2 flex flex-col gap-2'>
            <div
              className='relative w-24 h-24 mx-auto bg-white p-2 rounded-md shadow-sm'
              ref={qrRef}
            >
              <QRCode
                size={96}
                value={qrCodeValue}
                viewBox='0 0 96 96'
                className='w-full h-full'
              />
            </div>
            <div className='flex justify-center gap-2'>
              <Button
                size='sm'
                onClick={handleSave}
                disabled={saving}
                className='text-xs h-8 min-h-[32px] touch-manipulation'
              >
                <Check className='h-3 w-3 mr-1' />
                {saving ? 'Saving...' : 'Save'}
              </Button>
              <Button
                size='sm'
                variant='outline'
                onClick={handleCancel}
                disabled={saving}
                className='text-xs h-8 min-h-[32px] touch-manipulation'
              >
                <X className='h-3 w-3 mr-1' />
                Cancel
              </Button>
            </div>
          </div>
        )}

        {error && (
          <div className='mt-2 p-2 bg-red-100 border border-red-200 text-red-700 rounded-md text-xs'>
            {error}
          </div>
        )}
      </div>
    )
  }

  // Default full-featured variant
  return (
    <div className='w-full max-w-md'>
      <FullQRManager
        restaurant={restaurant}
        generating={generating}
        saving={saving}
        success={success}
        error={error}
        qrRef={qrRef}
        qrCodeValue={qrCodeValue}
        handleGenerate={handleGenerate}
        handleCancel={handleCancel}
        handleSave={handleSave}
        handleDownload={handleDownload}
        downloadSupported={downloadSupported}
      />
    </div>
  )
}

// Extracted full QR manager component to avoid duplication
interface FullQRManagerProps {
  restaurant: Restaurant
  generating: boolean
  saving: boolean
  success: boolean
  error: string | null
  qrRef: React.RefObject<HTMLDivElement | null>
  qrCodeValue: string
  handleGenerate: () => void
  handleCancel: () => void
  handleSave: () => void
  handleDownload: () => void
  downloadSupported: boolean
}

const FullQRManager = ({
  restaurant,
  generating,
  saving,
  success,
  error,
  qrRef,
  qrCodeValue,
  handleGenerate,
  handleCancel,
  handleSave,
  handleDownload,
  downloadSupported,
}: FullQRManagerProps) => {
  // Create refs for the displayed QR codes
  const currentQrRef = useRef<HTMLDivElement>(null)

  // Direct download function for the current QR code
  const handleDirectDownload = () => {
    downloadQRCodeFromElement(currentQrRef.current, restaurant.name)
  }

  // Alternative download for iOS Safari
  const handleCopyQrValue = () => {
    try {
      navigator.clipboard.writeText(qrCodeValue)
      // Could add a toast notification here
      alert('QR code value copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className='space-y-4'>
      {restaurant.qrCodeUrl ? (
        <div className='mb-4'>
          <p className='text-sm text-gray-600 mb-2'>Current QR code:</p>
          <div
            className='border border-gray-200 rounded-lg p-4 inline-block bg-white'
            ref={currentQrRef}
            data-qr-container='true'
          >
            <QRCode
              size={200}
              value={qrCodeValue}
              viewBox='0 0 200 200'
              className='w-36 h-36 sm:w-48 sm:h-48'
            />
          </div>
        </div>
      ) : (
        <p className='text-sm text-gray-600 mb-4'>
          No QR code has been generated yet.
        </p>
      )}

      {!generating ? (
        <Button
          onClick={handleGenerate}
          className='flex items-center gap-1 touch-manipulation'
        >
          <QrCode className='h-4 w-4' />
          {restaurant.qrCodeUrl ? 'Generate New QR Code' : 'Generate QR Code'}
        </Button>
      ) : (
        <div className='space-y-4'>
          <div
            className='mb-4 p-4 bg-white border border-gray-200 rounded-lg inline-block'
            ref={qrRef}
          >
            <QRCode
              size={200}
              value={qrCodeValue}
              viewBox='0 0 200 200'
              className='w-full h-full max-w-[200px]'
            />
          </div>

          <p className='text-sm text-gray-600 mb-4'>
            This QR code links to:{' '}
            <span className='font-mono text-xs break-all'>{qrCodeValue}</span>
          </p>

          <div className='flex flex-wrap gap-3'>
            <Button
              onClick={handleSave}
              disabled={saving}
              className='flex items-center gap-1 touch-manipulation'
            >
              <Check className='h-4 w-4' />
              {saving ? 'Saving...' : 'Save QR Code'}
            </Button>

            <Button
              onClick={handleCancel}
              disabled={saving}
              variant='outline'
              className='flex items-center gap-1 touch-manipulation'
            >
              <X className='h-4 w-4' />
              Cancel
            </Button>
          </div>
        </div>
      )}

      {error && (
        <Alert variant='destructive' className='mt-4'>
          <AlertTriangle className='h-4 w-4' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <div className='mt-4 space-y-3'>
          <Alert
            variant='success'
            className='bg-green-50 border-green-200 text-green-700'
          >
            <Check className='h-4 w-4' />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>QR code saved successfully!</AlertDescription>
          </Alert>

          <div className='flex flex-wrap gap-2'>
            {downloadSupported ? (
              <>
                <Button
                  onClick={handleDirectDownload}
                  variant='secondary'
                  className='flex items-center gap-1 touch-manipulation'
                >
                  <Download className='h-4 w-4' />
                  Download Exact QR Code
                </Button>
                <Button
                  onClick={handleDownload}
                  variant='outline'
                  className='flex items-center gap-1 touch-manipulation'
                >
                  <Download className='h-4 w-4' />
                  Download Original
                </Button>
              </>
            ) : (
              <>
                <Alert
                  variant='warning'
                  className='bg-amber-50 border-amber-200'
                >
                  <HelpCircle className='h-4 w-4' />
                  <AlertTitle>Download Not Supported</AlertTitle>
                  <AlertDescription>
                    Your browser may not support direct downloads. You can copy
                    the URL instead.
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={handleCopyQrValue}
                  variant='secondary'
                  className='flex items-center gap-1 touch-manipulation'
                >
                  Copy QR Code URL
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
