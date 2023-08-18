'use client'

import { useRouter } from 'next/navigation'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { useUserContext } from '../lib/auth'

export default function ButtonAppBar() {
  const router = useRouter()
  const { userName, setUserName } = useUserContext()
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setUserName('')
    router.push('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Welcome {userName}
          </Typography>
          <Button onClick={handleSubmit}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
