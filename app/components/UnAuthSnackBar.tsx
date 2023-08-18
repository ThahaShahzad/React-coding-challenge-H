import { Alert, Snackbar } from '@mui/material'

export default function UnAuthSnackBar({ open }: { open: boolean }) {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert variant='filled' severity='error' sx={{ width: '100vw' }}>
        Unauthorized!!!
      </Alert>
    </Snackbar>
  )
}
