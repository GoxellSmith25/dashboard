'use client'

import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import DashboardLayout from '@/components/DashboardLayout'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  UsersIcon, 
  ShieldCheckIcon,
  CogIcon,
  ServerIcon,
  ChartBarSquareIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  UserIcon,
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

// Demo kullanıcı verileri
const demoUsers = [
  {
    id: '1',
    name: 'Admin Kullanıcı',
    email: 'admin@moderndash.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2 dakika önce',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    createdAt: '15 Ocak 2024'
  },
  {
    id: '2',
    name: 'Normal Kullanıcı',
    email: 'user@moderndash.com',
    role: 'user',
    status: 'active',
    lastLogin: '1 gün önce',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    createdAt: '10 Ocak 2024'
  },
  {
    id: '3',
    name: 'Moderatör',
    email: 'moderator@moderndash.com',
    role: 'moderator',
    status: 'active',
    lastLogin: '3 saat önce',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    createdAt: '12 Ocak 2024'
  },
  {
    id: '4',
    name: 'Test Kullanıcı',
    email: 'test@moderndash.com',
    role: 'user',
    status: 'inactive',
    lastLogin: '1 hafta önce',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    createdAt: '8 Ocak 2024'
  },
]

function getRoleIcon(role: string) {
  switch (role) {
    case 'admin':
      return <ShieldCheckIcon className="h-5 w-5 text-red-500" />
    case 'moderator':
      return <UserGroupIcon className="h-5 w-5 text-yellow-500" />
    default:
      return <UserIcon className="h-5 w-5 text-green-500" />
  }
}

function getRoleText(role: string) {
  switch (role) {
    case 'admin':
      return 'Yönetici'
    case 'moderator':
      return 'Moderatör'
    case 'user':
      return 'Kullanıcı'
    default:
      return role
  }
}

function getRoleBadgeColor(role: string) {
  switch (role) {
    case 'admin':
      return 'bg-red-100 text-red-800'
    case 'moderator':
      return 'bg-yellow-100 text-yellow-800'
    case 'user':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getStatusBadgeColor(status: string) {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'inactive':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function AdminPage() {
  const { hasRole, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!hasRole('admin')) {
      router.push('/dashboard')
    }
  }, [hasRole, router])

  if (!hasRole('admin')) {
    return null
  }

  const systemStats = [
    { title: 'Toplam Kullanıcı', value: demoUsers.length.toString(), icon: UsersIcon, color: 'bg-blue-500' },
    { title: 'Aktif Kullanıcı', value: demoUsers.filter(u => u.status === 'active').length.toString(), icon: CheckCircleIcon, color: 'bg-green-500' },
    { title: 'Yöneticiler', value: demoUsers.filter(u => u.role === 'admin').length.toString(), icon: ShieldCheckIcon, color: 'bg-red-500' },
    { title: 'Sistem Uptime', value: '99.9%', icon: ServerIcon, color: 'bg-purple-500' },
  ]

  const systemAlerts = [
    { message: 'Sistem güncellemesi mevcut', type: 'warning', time: '2 saat önce' },
    { message: 'Backup başarıyla tamamlandı', type: 'success', time: '4 saat önce' },
    { message: 'Yeni kullanıcı kaydı', type: 'info', time: '1 gün önce' },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl px-6 py-8 text-white"
        >
          <div className="flex items-center">
            <ShieldCheckIcon className="w-10 h-10 mr-4" />
            <div>
              <h1 className="text-3xl font-bold">
                Admin Panel
              </h1>
              <p className="mt-2 text-red-100 text-lg">
                Sistem yönetimi ve kullanıcı kontrolü - Sadece yöneticiler erişebilir
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sistem İstatistikleri */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {systemStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stats-card"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Kullanıcı Yönetimi */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <div className="card-header flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Kullanıcı Yönetimi</h3>
                  <p className="text-sm text-gray-500">Sistemdeki tüm kullanıcıları yönetin</p>
                </div>
                <button className="btn-primary">
                  Yeni Kullanıcı Ekle
                </button>
              </div>

              {/* Kullanıcı Tablosu */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kullanıcı
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rol
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Durum
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Son Giriş
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        İşlemler
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {demoUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <Image
                                className="h-10 w-10 rounded-full object-cover"
                                src={user.avatar}
                                alt={user.name}
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {user.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getRoleIcon(user.role)}
                            <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor(user.role)}`}>
                              {getRoleText(user.role)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(user.status)}`}>
                            {user.status === 'active' ? 'Aktif' : 'Pasif'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {user.lastLogin}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button className="text-primary-600 hover:text-primary-900">
                            Düzenle
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Sil
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Yan Panel */}
          <div className="space-y-6">
            {/* Sistem Uyarıları */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Sistem Uyarıları</h3>
              </div>
              <div className="space-y-3">
                {systemAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                    <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                      alert.type === 'warning' ? 'bg-yellow-500' :
                      alert.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{alert.message}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hızlı İşlemler */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Hızlı İşlemler</h3>
              </div>
              <div className="space-y-3">
                <button className="w-full btn-primary flex items-center justify-center">
                  <UsersIcon className="w-5 h-5 mr-2" />
                  Kullanıcı Ekle
                </button>
                <button className="w-full btn-secondary flex items-center justify-center">
                  <ServerIcon className="w-5 h-5 mr-2" />
                  Sistem Backup
                </button>
                <button className="w-full btn-secondary flex items-center justify-center">
                  <ChartBarSquareIcon className="w-5 h-5 mr-2" />
                  Raporları Görüntüle
                </button>
                <button className="w-full btn-secondary flex items-center justify-center">
                  <CogIcon className="w-5 h-5 mr-2" />
                  Sistem Ayarları
                </button>
              </div>
            </motion.div>

            {/* Sistem Durumu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card"
            >
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Sistem Durumu</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Database</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">Aktif</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">API Server</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">Aktif</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-600">Cache Server</span>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">Uyarı</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 