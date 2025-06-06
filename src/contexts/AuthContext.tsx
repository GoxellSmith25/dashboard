'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type UserRole = 'admin' | 'user' | 'moderator'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
  isAuthenticated: boolean
  hasRole: (requiredRole: UserRole | UserRole[]) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo kullanıcılar - gerçek uygulamada database'den gelecek
const demoUsers: User[] = [
  {
    id: '1',
    email: 'admin@moderndash.com',
    name: 'Admin Kullanıcı',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date(),
  },
  {
    id: '2',
    email: 'user@moderndash.com',
    name: 'Normal Kullanıcı',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date(),
  },
  {
    id: '3',
    email: 'moderator@moderndash.com',
    name: 'Moderatör',
    role: 'moderator',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date(),
  },
]

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan kullanıcı bilgilerini kontrol et
    const savedUser = localStorage.getItem('moderndash_user')
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser)
        // Date objelerini yeniden oluştur
        parsedUser.createdAt = new Date(parsedUser.createdAt)
        parsedUser.updatedAt = new Date(parsedUser.updatedAt)
        setUser(parsedUser)
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('moderndash_user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Demo amaçlı - gerçek uygulamada API çağrısı yapılacak
    const foundUser = demoUsers.find(u => u.email === email)
    
    // Basit şifre kontrolü - gerçek uygulamada hash karşılaştırması yapılacak
    if (foundUser && password === 'password123') {
      setUser(foundUser)
      localStorage.setItem('moderndash_user', JSON.stringify(foundUser))
      setLoading(false)
      return true
    }
    
    setLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('moderndash_user')
  }

  const hasRole = (requiredRole: UserRole | UserRole[]): boolean => {
    if (!user) return false
    
    if (Array.isArray(requiredRole)) {
      return requiredRole.includes(user.role)
    }
    
    // Admin her şeye erişebilir
    if (user.role === 'admin') return true
    
    return user.role === requiredRole
  }

  const value: AuthContextType = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    hasRole,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth hook\'u AuthProvider içerisinde kullanılmalıdır')
  }
  return context
} 