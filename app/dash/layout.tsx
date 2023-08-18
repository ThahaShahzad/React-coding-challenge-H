'use client'

import { Box, CircularProgress } from '@mui/material'
import { ReactNode, useEffect } from 'react'
import ButtonAppBar from '../components/DashAppBar'
import { useUserContext } from '../lib/auth'
import { useRouter } from 'next/navigation'

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { userName } = useUserContext()
  useEffect(() => {
    console.log(userName)
    if (userName === '' || userName === undefined || userName === null) {
      router.push('/')
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
