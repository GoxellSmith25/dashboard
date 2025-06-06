'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  UsersIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  XMarkIcon,
  ClipboardDocumentListIcon,
  CubeTransparentIcon,
  BellIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext'
import clsx from 'clsx'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface NavigationItem {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  requiredRoles?: string[]
  badge?: string
}

const navigation: NavigationItem[] = [
  { 
    name: 'Ana Sayfa', 
    href: '/dashboard', 
    icon: HomeIcon 
  },
  { 
    name: 'Analitik', 
    href: '/dashboard/analytics', 
    icon: ChartBarIcon 
  },
  { 
    name: 'Kullanıcılar', 
    href: '/dashboard/users', 
    icon: UsersIcon,
    requiredRoles: ['admin', 'moderator'],
    badge: '125'
  },
  { 
    name: 'Projeler', 
    href: '/dashboard/projects', 
    icon: CubeTransparentIcon 
  },
  { 
    name: 'Belgeler', 
    href: '/dashboard/documents', 
    icon: DocumentTextIcon 
  },
  { 
    name: 'Raporlar', 
    href: '/dashboard/reports', 
    icon: ClipboardDocumentListIcon,
    requiredRoles: ['admin', 'moderator']
  },
  { 
    name: 'Bildirimler', 
    href: '/dashboard/notifications', 
    icon: BellIcon,
    badge: '3'
  },
  { 
    name: 'Yönetim', 
    href: '/dashboard/admin', 
    icon: ShieldCheckIcon,
    requiredRoles: ['admin']
  },
  { 
    name: 'Ayarlar', 
    href: '/dashboard/settings', 
    icon: Cog6ToothIcon 
  },
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const { hasRole, user } = useAuth()

  const filteredNavigation = navigation.filter(item => {
    if (!item.requiredRoles) return true
    return hasRole(item.requiredRoles as any)
  })

  return (
    <>
      {/* Mobil overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
        </div>
      )}

      {/* Sidebar */}
      <div className={clsx(
        'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Dashboard
              </h2>
            </div>
            <button
              type="button"
              className="lg:hidden rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={onClose}
            >
              <span className="sr-only">Menüyü kapat</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto scrollbar-hide">
            <div className="space-y-1">
              {filteredNavigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      'group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
                      isActive
                        ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    )}
                    onClick={() => {
                      // Mobilde menü tıklandıktan sonra kapat
                      if (window.innerWidth < 1024) {
                        onClose()
                      }
                    }}
                  >
                    <div className="flex items-center">
                      <item.icon
                        className={clsx(
                          'mr-3 h-5 w-5 flex-shrink-0',
                          isActive ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                    {item.badge && (
                      <span className={clsx(
                        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
                        isActive 
                          ? 'bg-primary-100 text-primary-600' 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                      )}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="flex-shrink-0 p-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">
                ModernDash v1.0
              </div>
              <div className="flex items-center justify-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-gray-500">Sistem Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 