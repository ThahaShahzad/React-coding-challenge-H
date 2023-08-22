'use client'

import { Box, CircularProgress } from '@mui/material'
import { ReactNode, useEffect } from 'react'
import ButtonAppBar from '../components/DashAppBar'
import { useUserContext } from '../lib/auth'
import { useRouter } from 'next/navigation'

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { userName, setUserName } = useUserContext()
  useEffect(() => {
    const localStorageUserName = localStorage.getItem('userName')
    if (localStorageUserName === null) {
      router.push('/')
    } else {
      setUserName(localStorageUserName)
    }
  }, [])

  if (!userName)
    return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <CircularProgress color='success' />
      </Box>
    )
  return (
    <Box component={'main'}>
      <ButtonAppBar />
      {children}
    </Box>
  )
}
