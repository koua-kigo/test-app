'use client'

import type React from 'react'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import Link from 'next/link'

import {
  SignedIn,
  SignInButton,
  SignOutButton,
  SignUp,
  SignUpButton,
  useSession,
  useUser,
} from '@clerk/nextjs'
import {
  Award,
  Clock,
  Home,
  Settings,
  Trophy,
  User,
  Utensils,
  UserPlus,
  Loader2,
  QrCode,
  CheckCircle,
  Wallet2,
  MedalIcon,
  QrCodeIcon,
} from 'lucide-react'
import {motion, AnimatePresence} from 'motion/react'
import {useCallback, useState, useEffect} from 'react'
import {QrReader} from 'react-qr-reader'
import {useScanQrCode} from '@/hooks/use-scan-qr-code'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import {NavScanner} from '@/components/nav/nav-scanner'

export type NavProps = {
  initialActiveTab?: string
  onTabChange?: (tabId: string) => void
}

type NavItem = {
  id: string
  icon?: React.ElementType
  label: string
  href?: string
  action?: string
}

// Create a simple spinner component
const Spinner = ({className}: {className?: string}) => {
  return <Loader2 className={cn('animate-spin', className)} />
}

// Animation variants for the QR scanner and content
const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  hidden: {opacity: 0, y: 10},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.3, ease: 'easeOut'},
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {duration: 0.2, ease: 'easeIn'},
  },
}

// NavScanner is now just a button that triggers the modal
type NavScannerButtonProps = {
  onScanClick: () => void
}

export const NavScannerButton = ({onScanClick}: NavScannerButtonProps) => {
  return (
    <Button
      onClick={onScanClick}
      variant='ghost'
      size='sm'
      className={cn('p-4 mx-2 h-auto !w-auto rounded-full', 'text-primary')}
    >
      <QrCodeIcon className='h-7 w-7' />
    </Button>
  )
}

export const Nav = ({initialActiveTab = 'home', onTabChange}: NavProps) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab)
  const {isSignedIn, user} = useUser()
  const {session} = useSession()

  console.log('🚀 ~ Nav ~ session:', session)

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  console.log('🚀 ~ Nav ~ user:', user)

  const userIsAdmin = user?.publicMetadata?.role === 'admin'

  console.log('🚀 ~ Nav ~ userIsAdmin:', userIsAdmin)

  const staticNavItems: NavItem[] = [
    // { id: "home", icon: Home, label: "Home", href: "/" },
    {
      id: 'restaurants',
      icon: Utensils,
      label: 'Food',
      href: '/deals',
    },

    // {
    // 	id: "leaderBoard",
    // 	icon: Trophy,
    // 	label: "Leader Board",
    // 	href: "/leaderboard",
    // },
  ]

  const authNavItems: NavItem[] = []
  if (isSignedIn && !userIsAdmin) {
    authNavItems.push({
      id: 'myProfile',
      icon: User,
      label: 'Profile',
      href: `/users/${user?.id}/profile`,
    })
  }
  if (isSignedIn && userIsAdmin) {
    authNavItems.push({
      id: 'admin',
      icon: Settings,
      label: 'Admin',
      href: '/admin',
    })
  }

  const navItems: NavItem[] = [...staticNavItems, ...authNavItems]
  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])
  return (
    <>
      {/* QR Scanner Modal with animations */}
      <AnimatePresence>
        {showModal && (
          <Dialog open={showModal} onOpenChange={toggleModal}>
            <DialogContent className='sm:max-w-md p-0 overflow-hidden'>
              <motion.div
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                className='p-6'
              >
                <motion.div variants={itemVariants}>
                  <DialogHeader>
                    <DialogTitle>Scan QR Code</DialogTitle>
                    <DialogDescription>
                      Point your camera at a restaurant's QR code to earn a
                      punch.
                    </DialogDescription>
                  </DialogHeader>
                </motion.div>

                <div className='flex flex-col items-center space-y-4 mt-4'>
                  <NavScanner userId={user?.id || ''} closeModal={closeModal} />
                </div>

                <motion.div variants={itemVariants} className='mt-6'>
                  <DialogFooter className='sm:justify-start'>
                    <DialogClose asChild>
                      <Button
                        type='button'
                        variant='secondary'
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </motion.div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <nav className='fixed bottom-0 left-1/2 -translate-x-1/2 py-4 z-20 '>
        <div className='flex justify-evenly p-3 w-content border rounded-full bg-[#e0d9d1] backdrop-blur-sm '>
          <Button
            variant='ghost'
            size='sm'
            className={cn(
              'p-4 mx-2 h-auto !w-auto rounded-full',
              'text-primary'
            )}
          >
            <Link href='/deals' className={cn(' h-auto !w-auto rounded-full')}>
              <MedalIcon className='h-7 w-7' />
            </Link>
          </Button>

          {isSignedIn && !userIsAdmin && (
            <NavScannerButton onScanClick={toggleModal} />
          )}
          {userIsAdmin && (
            <Button
              variant='ghost'
              size='sm'
              className={cn(
                'p-4 mx-2 h-auto !w-auto rounded-full',
                'text-primary'
              )}
            >
              <Link
                href={'/admin'}
                className={cn('  h-auto !w-auto rounded-full')}
              >
                <Settings className='h-7 w-7' />
              </Link>
            </Button>
          )}
          {isSignedIn && (
            <Button
              variant='ghost'
              size='sm'
              className={cn(
                'p-4 mx-2 h-auto !w-auto rounded-full',
                'text-primary'
              )}
            >
              <Link
                href={`/users/${user?.id}/profile`}
                className={cn(' h-auto !w-auto rounded-full')}
              >
                <Wallet2 className='h-7 w-7' />
              </Link>
            </Button>
          )}

          {!isSignedIn && (
            <SignInButton>
              <Button
                variant='ghost'
                size='sm'
                className={cn(
                  'p-4 mx-2 h-auto !w-auto rounded-full',
                  'text-primary'
                )}
              >
                <UserPlus className='h-7 w-7' />
              </Button>
            </SignInButton>
          )}
        </div>
      </nav>
    </>
  )
}
