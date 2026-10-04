import { createContext, useContext, useState } from 'react'

export interface User {
  id: string
  name: string
  firstName: string
  lastName: string
  email: string
  phone: string
  memberId: string
  memberTier: string
}

interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  login: (email?: string, name?: string) => void
  logout: () => void
}

const defaultUser: User = {
  id: 'usr_001',
  name: 'Juan Dela Cruz',
  firstName: 'Juan',
  lastName: 'Dela Cruz',
  email: 'juan@email.com',
  phone: '+63 912 345 6789',
  memberId: 'HIH-8829-PH',
  memberTier: 'Clubhouse Premium',
}

const AuthContext = createContext<AuthContextType>({
  user: defaultUser,
  isLoggedIn: true,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('holeinhub_auth')
    if (saved === 'logged_out') return null
    return defaultUser
  })

  const login = (email?: string, name?: string) => {
    const updatedUser: User = {
      ...defaultUser,
      email: email || defaultUser.email,
      name: name || defaultUser.name,
      firstName: name ? name.split(' ')[0] : defaultUser.firstName,
    }
    setUser(updatedUser)
    localStorage.setItem('holeinhub_auth', 'logged_in')
  }

  const logout = () => {
    setUser(null)
    localStorage.setItem('holeinhub_auth', 'logged_out')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
