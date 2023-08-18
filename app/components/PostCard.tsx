import { CardHeader } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { postType } from '../dash/page'

export default function PostCard({ id, title, body }: postType) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <CardHeader title={id} />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {title}
          </Typography>

          <Typography variant='body2'>{body}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
