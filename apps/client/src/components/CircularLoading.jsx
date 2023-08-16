import React from 'react'
import { CircularProgress, Box } from '@chakra-ui/react'

export default function CircularLoading() {
  return (
    <Box as="div" fontSize="2xl">
      <CircularProgress isIndeterminate color="black" size={8} /> Loading...
    </Box>
  )
}
