import React from 'react'
import { Stack, Box, Skeleton, Flex, SkeletonCircle } from '@chakra-ui/react'

export default function OrdersListSkeleton() {
  return (
    <Box mt="30px">
      <Box bg={"blackAlpha.50"} p={5}>
        <Stack>
          <Skeleton height='20px' width={300} />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>
      </Box>
      <Skeleton height='20px' width={100} mt={5} ml={5} />
      <Flex py={4} ml={5} gap={5}>
        <SkeletonCircle size="100" mt={2} p={5}/>
        <Box mt={4} width="100%">
          <Skeleton height='8px' width={200} mb={4} />
          <Skeleton height='8px' width={200} mb={4} />
          <Skeleton height='8px' width={200} mb={4} />
          <Skeleton height='8px' width={200} mb={4} />
        </Box>
      </Flex>
    </Box>
  )
}
