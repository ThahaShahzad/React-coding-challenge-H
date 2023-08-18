import { Box, Grid } from '@mui/material'
import PostCard from '../components/PostCard'

export interface postType {
  id: number
  title: string
  body: string
}
async function getPosts(): Promise<postType[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  return res.json()
}

export default async function Page() {
  const posts = await getPosts()
  return (
    <Box sx={{ p: '2rem' }}>
      <Grid container spacing={2}>
        {posts.map(({ id, title, body }) => (
          <Grid item xs={4}>
            <PostCard id={id} title={title} body={body} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
