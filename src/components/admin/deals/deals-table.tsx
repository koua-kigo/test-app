'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  Download,
  FileSpreadsheet,
  Upload,
} from 'lucide-react'
import type {Deal} from '@/types/db'
import {deleteRestaurantDeal} from '@/db/models/restaurants/restaurants'
import {useRouter} from 'next/navigation'
import {exportToCSV} from '@/lib/csv'
import {CSVUpload} from '@/components/admin/csv-upload'
import {importDealsFromCSV} from '@/actions/deals'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {toast} from 'sonner'

// Define the type for the deals with restaurant name
type DealWithRestaurant = Deal & {
  restaurant?: {
    name: string
    id?: bigint
  }
}

export function DealsTable({deals}: {deals: DealWithRestaurant[]}) {
  const [isDeleting, setIsDeleting] = useState<bigint | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [dealToDelete, setDealToDelete] = useState<bigint | null>(null)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [isImporting, setIsImporting] = useState(false)
  const router = useRouter()

  // Check viewport size on mount and window resize
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    // Initial check
    checkViewport()

    // Set up event listener for resize
    window.addEventListener('resize', checkViewport)

    // Clean up
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  // Function to handle deal deletion
  const handleDelete = async (id: bigint) => {
    setDealToDelete(id)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = async () => {
    if (!dealToDelete) return

    try {
      setIsDeleting(dealToDelete)
      await deleteRestaurantDeal(dealToDelete)
      toast.success('Deal deleted', {
        description: 'The deal has been successfully deleted.',
      })
      router.refresh() // Refresh the page to update the deals list
    } catch (error) {
      console.error('Error deleting deal:', error)
      toast.error('Error', {
        description: 'Failed to delete the deal. Please try again.',
      })
    } finally {
      setIsDeleting(null)
      setShowDeleteConfirm(false)
      setDealToDelete(null)
    }
  }

  const cancelDelete = () => {
    setShowDeleteConfirm(false)
    setDealToDelete(null)
  }

  // Function to handle CSV export
  const handleExportCSV = async () => {
    try {
      setIsExporting(true)

      // Create a clean export data structure with only the fields we want
      const exportData = deals.map((deal) => ({
        id: deal.id.toString(),
        title: deal.title,
        content: deal.content,
        restaurant: deal.restaurant?.name || 'Unknown',
        status: deal.active ? 'Active' : 'Inactive',
        createdAt: new Date(deal.createdAt).toLocaleDateString(),
        updatedAt: new Date(deal.updatedAt).toLocaleDateString(),
      }))

      // Export to CSV
      exportToCSV(exportData, 'deals-export')

      toast.success(`Successfully exported ${deals.length} deals to CSV`)
    } catch (error) {
      console.error('Error exporting CSV:', error)
      toast.error('Failed to export CSV. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  // Add handler for CSV import
  const handleImportCSV = async (data: Record<string, unknown>[]) => {
    try {
      setIsImporting(true)
      const result = await importDealsFromCSV(data)

      if (result.success) {
        // Force refresh to get updated data
        router.refresh()
      } else {
        toast.error(result.message)
        if (result.error?._form) {
          throw new Error(result.error._form[0])
        }
      }
    } catch (error) {
      console.error('CSV import error:', error)
      throw error
    } finally {
      setIsImporting(false)
    }
  }

  // Mobile card view for deals
  const renderMobileCards = () => {
    return deals.length > 0 ? (
      <div className='space-y-4'>
        {deals.map((deal) => (
          <div
            key={String(deal.id)}
            className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'
          >
            <div className='relative h-32 w-full bg-gray-100'>
              {deal.imageUrl ? (
                <Image
                  src={deal.imageUrl}
                  alt={deal.title}
                  fill
                  className='object-cover'
                />
              ) : (
                <div className='h-full w-full bg-gray-200 flex items-center justify-center'>
                  <span className='text-gray-500 text-sm'>No image</span>
                </div>
              )}
            </div>

            <div className='p-4'>
              <div className='flex justify-between items-start'>
                <h3 className='font-medium text-gray-900'>{deal.title}</h3>
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    deal.active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {deal.active ? 'Active' : 'Inactive'}
                </span>
              </div>

              {deal.restaurant?.name && (
                <p className='text-sm text-gray-600 mt-1'>
                  {deal.restaurant.name}
                </p>
              )}

              <p className='text-sm text-gray-500 mt-2 line-clamp-2'>
                {deal.content}
              </p>

              <div className='flex justify-between items-center mt-4 pt-3 border-t border-gray-100'>
                <div className='text-xs text-gray-500'>
                  Created: {new Date(deal.createdAt).toLocaleDateString()}
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
                      <MoreVertical className='h-4 w-4' />
                      <span className='sr-only'>Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/deals/${deal.id}`}>
                        <Eye className='mr-2 h-4 w-4' />
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/deals/${deal.id}/edit`}>
                        <Edit className='mr-2 h-4 w-4' />
                        Edit Deal
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(deal.id)}
                      className='text-red-600'
                    >
                      <Trash2 className='mr-2 h-4 w-4' />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className='bg-white rounded-lg border border-gray-200 p-8 text-center'>
        <p className='text-gray-500'>
          No deals found.{' '}
          <Link
            href='/admin/deals/new'
            className='text-blue-500 hover:underline'
          >
            Create one
          </Link>
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Export CSV Button */}
      <div className='mb-4 flex justify-end gap-2'>
        <CSVUpload
          onUpload={handleImportCSV}
          requiredColumns={['title', 'content', 'restaurantId', 'active']}
          entityName='Deals'
          buttonText='Import Deals'
          icon={<Upload className='h-3.5 w-3.5 mr-1.5' />}
        />
        <Button
          size='sm'
          variant='outline'
          onClick={handleExportCSV}
          disabled={isExporting || deals.length === 0}
          className='h-8 rounded-lg bg-background hover:bg-gray-100'
        >
          <FileSpreadsheet className='h-3.5 w-3.5 mr-1.5' />
          {isExporting ? 'Exporting...' : 'Export to CSV'}
        </Button>
      </div>

      {/* Mobile card view */}
      <div className={cn(isMobileView ? 'block' : 'hidden')}>
        {renderMobileCards()}
      </div>

      {/* Desktop table view */}
      <div className={cn(isMobileView ? 'hidden' : 'block')}>
        <div className='w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm'>
          <div className='overflow-x-auto'>
            <table className='w-full min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50 text-xs font-medium uppercase text-gray-500'>
                <tr>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Deal
                  </th>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Restaurant
                  </th>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Status
                  </th>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Created
                  </th>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Last Updated
                  </th>
                  <th scope='col' className='px-6 py-3 text-right'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {deals.length > 0 ? (
                  deals.map((deal) => (
                    <tr key={String(deal.id)} className='hover:bg-gray-50'>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='flex items-center space-x-3'>
                          <div className='h-10 w-10 flex-shrink-0 relative overflow-hidden rounded-md'>
                            {deal.imageUrl ? (
                              <Image
                                src={deal.imageUrl}
                                alt={deal.title}
                                fill
                                className='object-cover'
                              />
                            ) : (
                              <div className='h-full w-full bg-gray-200 flex items-center justify-center'>
                                <span className='text-gray-500 text-xs'>
                                  No image
                                </span>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className='font-medium text-gray-900'>
                              {deal.title}
                            </p>
                            <p className='text-sm text-gray-500 truncate max-w-[200px]'>
                              {deal.content}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <span className='font-medium'>
                          {deal.restaurant?.name}
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            deal.active
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {deal.active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                        {new Date(deal.createdAt).toLocaleDateString()}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                        {new Date(deal.updatedAt).toLocaleDateString()}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                        <div className='flex justify-end space-x-2'>
                          <Link
                            href={`/admin/deals/${deal.id}`}
                            className='rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            title='View'
                          >
                            <Eye size={18} />
                          </Link>
                          <Link
                            href={`/admin/deals/${deal.id}/edit`}
                            className='rounded p-1 text-blue-500 hover:bg-blue-100 hover:text-blue-700'
                            title='Edit'
                          >
                            <Edit size={18} />
                          </Link>
                          <button
                            type='button'
                            onClick={() => handleDelete(deal.id)}
                            disabled={isDeleting === deal.id}
                            className='rounded p-1 text-red-500 hover:bg-red-100 hover:text-red-700 disabled:opacity-50'
                            title='Delete'
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className='px-6 py-4 text-center text-sm text-gray-500'
                    >
                      No deals found.{' '}
                      <Link
                        href='/admin/deals/new'
                        className='text-blue-500 hover:underline'
                      >
                        Create one
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination - simplified for mobile friendliness */}
          <div className='border-t border-gray-200 px-4 py-3 sm:px-6'>
            <div className='flex flex-1 justify-between'>
              <div>
                <p className='text-sm text-gray-700'>
                  Showing <span className='font-medium'>{deals.length}</span>{' '}
                  results
                </p>
              </div>
              <div>
                <nav
                  className='isolate inline-flex -space-x-px rounded-md shadow-sm'
                  aria-label='Pagination'
                >
                  <button
                    type='button'
                    className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  >
                    <span className='sr-only'>Previous</span>
                    &laquo;
                  </button>
                  <button
                    type='button'
                    aria-current='page'
                    className='relative z-10 inline-flex items-center bg-[#818cf8] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    1
                  </button>
                  <button
                    type='button'
                    className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  >
                    <span className='sr-only'>Next</span>
                    &raquo;
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete confirmation dialog */}
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this deal. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelDelete}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className='bg-red-600 hover:bg-red-700 focus:ring-red-600'
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
