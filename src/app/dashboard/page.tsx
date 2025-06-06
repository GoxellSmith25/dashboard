'use client'

import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import DashboardLayout from '@/components/DashboardLayout'
import { 
  UsersIcon, 
  DocumentTextIcon, 
  ChartBarIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  TrendingUpIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

interface StatsCardProps {
  title: string
  value: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  change: string
  changeType: 'increase' | 'decrease'
  color?: string
}

function StatsCard({ title, value, icon: Icon, change, changeType, color = 'bg-primary-500' }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="stats-card"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="ml-5 flex-1">
          <div className="flex items-baseline">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className={`ml-2 flex items-baseline text-sm font-semibold ${
              changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {changeType === 'increase' ? '↗' : '↘'} {change}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface ActivityItemProps {
  action: string
  time: string
  user?: string
  type: 'success' | 'warning' | 'error' | 'info'
}

function ActivityItem({ action, time, user, type }: ActivityItemProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-500'
      case 'warning': return 'bg-yellow-500'
      case 'error': return 'bg-red-500'
      default: return 'bg-blue-500'
    }
  }

  return (
    <div className="flex items-center space-x-3 py-3">
      <div className={`w-2 h-2 ${getTypeColor(type)} rounded-full flex-shrink-0`}></div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 truncate">
          {action}
          {user && <span className="font-medium"> - {user}</span>}
        </p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const { user } = useAuth()

  const getRoleSpecificStats = () => {
    switch (user?.role) {
      case 'admin':
        return [
          { title: 'Toplam Kullanıcı', value: '1,234', icon: UsersIcon, change: '+12%', changeType: 'increase' as const, color: 'bg-blue-500' },
          { title: 'Aylık Gelir', value: '₺24,500', icon: CurrencyDollarIcon, change: '+8%', changeType: 'increase' as const, color: 'bg-green-500' },
          { title: 'Aktif Projeler', value: '45', icon: ChartBarIcon, change: '+15%', changeType: 'increase' as const, color: 'bg-purple-500' },
          { title: 'Sistem Uptime', value: '99.9%', icon: ShieldCheckIcon, change: '+0.1%', changeType: 'increase' as const, color: 'bg-indigo-500' },
        ]
      case 'moderator':
        return [
          { title: 'Yönetilen Kullanıcılar', value: '256', icon: UsersIcon, change: '+7%', changeType: 'increase' as const, color: 'bg-blue-500' },
          { title: 'İncelenen İçerik', value: '34', icon: DocumentTextIcon, change: '+15%', changeType: 'increase' as const, color: 'bg-orange-500' },
          { title: 'Haftalık Rapor', value: '12', icon: ChartBarIcon, change: '+3%', changeType: 'increase' as const, color: 'bg-purple-500' },
        ]
      default:
        return [
          { title: 'Projelerim', value: '8', icon: DocumentTextIcon, change: '+2', changeType: 'increase' as const, color: 'bg-blue-500' },
          { title: 'Tamamlanan Görevler', value: '23', icon: ChartBarIcon, change: '+4%', changeType: 'increase' as const, color: 'bg-green-500' },
          { title: 'Çalışma Saati', value: '156h', icon: ClockIcon, change: '+12h', changeType: 'increase' as const, color: 'bg-purple-500' },
          { title: 'Performans', value: '94%', icon: TrendingUpIcon, change: '+2%', changeType: 'increase' as const, color: 'bg-indigo-500' },
        ]
    }
  }

  const stats = getRoleSpecificStats()

  const recentActivities = [
    { action: 'Yeni kullanıcı kaydı', time: '2 dakika önce', user: 'John Doe', type: 'success' as const },
    { action: 'Rapor oluşturuldu', time: '15 dakika önce', user: 'Jane Smith', type: 'info' as const },
    { action: 'Sistem güncellemesi', time: '1 saat önce', type: 'warning' as const },
    { action: 'Backup tamamlandı', time: '2 saat önce', type: 'success' as const },
    { action: 'Güvenlik taraması', time: '4 saat önce', type: 'info' as const },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Hoş geldin mesajı */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl px-6 py-8 text-white"
        >
          <h1 className="text-3xl font-bold">
            Hoş geldin, {user?.name}! 👋
          </h1>
          <p className="mt-2 text-primary-100 text-lg">
            Dashboard&apos;unuza genel bir bakış. Son aktivitelerinizi ve istatistiklerinizi burada görebilirsiniz.
          </p>
          <div className="mt-4 flex items-center space-x-4 text-primary-100">
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 mr-1" />
              {new Date().toLocaleDateString('tr-TR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <EyeIcon className="w-5 h-5 mr-1" />
              Son giriş: {new Date().toLocaleTimeString('tr-TR')}
            </div>
          </div>
        </motion.div>

        {/* İstatistikler */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              change={stat.change}
              changeType={stat.changeType}
              color={stat.color}
            />
          ))}
        </div>

        {/* Ana içerik alanı */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sol taraf - Grafikler ve büyük içerik */}
          <div className="lg:col-span-2 space-y-6">
            {/* Grafik alanı */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Performans Analizi</h3>
                <p className="text-sm text-gray-500">Son 30 günlük performans verileriniz</p>
              </div>
              
              {/* Placeholder grafik */}
              <div className="h-64 bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg flex items-center justify-center border-2 border-dashed border-primary-200">
                <div className="text-center">
                  <ChartBarIcon className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <p className="text-primary-600 font-medium">Grafik Alanı</p>
                  <p className="text-sm text-primary-500">Recharts entegrasyonu ile grafikler burada görünecek</p>
                </div>
              </div>
            </motion.div>

            {/* Hızlı Eylemler */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Hızlı Eylemler</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="btn-primary text-center py-4">
                  <DocumentTextIcon className="w-6 h-6 mx-auto mb-2" />
                  Yeni Rapor
                </button>
                {user?.role === 'admin' && (
                  <button className="btn-secondary text-center py-4">
                    <UsersIcon className="w-6 h-6 mx-auto mb-2" />
                    Kullanıcı Ekle
                  </button>
                )}
                <button className="btn-secondary text-center py-4">
                  <ChartBarIcon className="w-6 h-6 mx-auto mb-2" />
                  Analiz
                </button>
                <button className="btn-secondary text-center py-4">
                  <ShieldCheckIcon className="w-6 h-6 mx-auto mb-2" />
                  Ayarlar
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sağ taraf - Yan panel */}
          <div className="space-y-6">
            {/* Son Aktiviteler */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <div className="card-header">
                <h3 className="text-lg font-semibold text-gray-900">Son Aktiviteler</h3>
              </div>
              <div className="space-y-1">
                {recentActivities.map((activity, index) => (
                  <ActivityItem
                    key={index}
                    action={activity.action}
                    time={activity.time}
                    user={activity.user}
                    type={activity.type}
                  />
                ))}
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
                  <span className="text-sm text-gray-600">CPU Kullanımı</span>
                  <span className="text-sm font-medium text-gray-900">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">RAM Kullanımı</span>
                  <span className="text-sm font-medium text-gray-900">67%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Disk Kullanımı</span>
                  <span className="text-sm font-medium text-gray-900">23%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 