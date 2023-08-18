'use client'

import { useContext, createContext, useState, ReactNode } from 'react'

export interface UserContextType {
  userName: string
  setUserName: React.Dispatch<React.SetStateAction<string>>
}

const userContext = createContext<UserContextType>(undefined!)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const Value = useProvideUserContext()
  return <userContext.Provider value={Value}>{children}</userContext.Provider>
}

export const useUserContext = () => {
  return useContext(userContext)
}

const useProvideUserContext = () => {
  const [userName, setUserName] = useState<string>(undefined!)
  return {
    userName,
    setUserName
  }
}
