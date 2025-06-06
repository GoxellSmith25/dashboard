'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  CpuChipIcon, 
  GlobeAltIcon,
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
  {
    name: 'Gelişmiş Analitik',
    description: 'Gerçek zamanlı veriler ve detaylı raporlamalarla işinizi büyütün',
    icon: ChartBarIcon,
    color: 'bg-blue-500',
  },
  {
    name: 'Güvenli Altyapı',
    description: 'Enterprise seviyede güvenlik ile verileriniz tamamen korunur',
    icon: ShieldCheckIcon,
    color: 'bg-green-500',
  },
  {
    name: 'Yüksek Performans',
    description: 'Optimize edilmiş altyapı ile hızlı ve kesintisiz deneyim',
    icon: CpuChipIcon,
    color: 'bg-purple-500',
  },
  {
    name: 'Global Erişim',
    description: 'Dünyanın her yerinden hızlı erişim imkanı',
    icon: GlobeAltIcon,
    color: 'bg-orange-500',
  },
]

const stats = [
  { name: 'Aktif Kullanıcı', value: '100K+', icon: UserGroupIcon },
  { name: 'Aylık İşlem', value: '2.5M+', icon: BoltIcon },
  { name: 'Müşteri Memnuniyeti', value: '99.9%', icon: SparklesIcon },
  { name: 'Uptime', value: '99.99%', icon: ShieldCheckIcon },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  ModernDash
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="btn-secondary">
                Giriş Yap
              </Link>
              <Link href="/dashboard" className="btn-primary">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
                <span className="block">Geleceğin</span>
                <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Dashboard&apos;u
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                İşinizi bir sonraki seviyeye taşıyacak güçlü araçlar, 
                modern tasarım ve kullanıcı dostu arayüz bir arada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                  Hemen Başla
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link href="#features" className="btn-secondary text-lg px-8 py-4">
                  Özellikleri İncele
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Güçlü Özellikler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern teknoloji yığını ile geliştirilen dashboard&apos;umuz, 
              işletmenizin ihtiyaçlarına özel tasarlanmış güçlü özellikler sunar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hazır mısınız?
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Bugün başlayın ve işinizi daha verimli hale getirin.
              Kurulum sadece birkaç dakika sürer.
            </p>
            <Link href="/dashboard" className="bg-white text-primary-700 hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg inline-flex items-center transition-all duration-200 shadow-lg hover:shadow-xl">
              Ücretsiz Başla
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">ModernDash</h3>
            <p className="text-gray-400 mb-6">
              Gelecek nesil dashboard çözümleri
            </p>
            <div className="text-sm text-gray-500">
              © 2024 ModernDash. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 