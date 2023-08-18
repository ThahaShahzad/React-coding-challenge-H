'use client'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation'
import { useUserContext } from './lib/auth'

export default function Page() {
  const router = useRouter()
  const { setUserName } = useUserContext()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const userName = data.get('userName') as string
    setUserName(userName)
    router.push('/dash')
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'info.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            variant='filled'
            margin='normal'
            required
            fullWidth
            id='userName'
            label='User name'
            InputLabelProps={{
              shrink: true
            }}
            name='userName'
            autoComplete='username'
            autoFocus
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
