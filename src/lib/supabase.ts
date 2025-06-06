import { createClient } from '@supabase/supabase-js'

// Supabase URL ve Key - gerçek uygulamada environment variables kullanın
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types (Supabase'den generate edilir)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          role: 'admin' | 'user' | 'moderator'
          avatar_url?: string
          created_at: string
          updated_at: string
          last_login?: string
          status: 'active' | 'inactive'
        }
        Insert: {
          id?: string
          email: string
          name: string
          role?: 'admin' | 'user' | 'moderator'
          avatar_url?: string
          created_at?: string
          updated_at?: string
          last_login?: string
          status?: 'active' | 'inactive'
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: 'admin' | 'user' | 'moderator'
          avatar_url?: string
          created_at?: string
          updated_at?: string
          last_login?: string
          status?: 'active' | 'inactive'
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description?: string
          status: 'active' | 'completed' | 'paused'
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string
          status?: 'active' | 'completed' | 'paused'
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          status?: 'active' | 'completed' | 'paused'
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

// Helper functions
export const getUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching users:', error)
    return []
  }
  
  return data || []
}

export const getUserById = async (id: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Error fetching user:', error)
    return null
  }
  
  return data
}

export const createUser = async (userData: Database['public']['Tables']['users']['Insert']) => {
  const { data, error } = await supabase
    .from('users')
    .insert(userData)
    .select()
    .single()
  
  if (error) {
    console.error('Error creating user:', error)
    return null
  }
  
  return data
}

export const updateUser = async (id: string, userData: Database['public']['Tables']['users']['Update']) => {
  const { data, error } = await supabase
    .from('users')
    .update({ ...userData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    console.error('Error updating user:', error)
    return null
  }
  
  return data
}

export const deleteUser = async (id: string) => {
  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error('Error deleting user:', error)
    return false
  }
  
  return true
}

// Project related functions
export const getProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select(`
      *,
      users!projects_created_by_fkey(name, email)
    `)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  
  return data || []
}

export const createProject = async (projectData: Database['public']['Tables']['projects']['Insert']) => {
  const { data, error } = await supabase
    .from('projects')
    .insert(projectData)
    .select()
    .single()
  
  if (error) {
    console.error('Error creating project:', error)
    return null
  }
  
  return data
} 