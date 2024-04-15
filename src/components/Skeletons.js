import { Container, Skeleton } from '@mui/material'
import React from 'react'

const Skeletons = () => {
  return (
   <Container maxWidth="xxl">
    <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "10px"}} />
    <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "10px"}} />
    <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "10px"}} />
    <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "10px"}} />
    <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "10px"}} />
    <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "10px"}} />
    <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "10px"}} />
    <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "10px"}} />
  </Container> 
    )
}

export default Skeletons