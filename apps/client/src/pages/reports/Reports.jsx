import React from 'react'
import {
  Heading,
  Flex,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Divider,
  Stack,
} from "@chakra-ui/react"
import useReportsHandler from './hooks/useReportsHandler'

export default function Reports() {
  const {
    filter,
    navigate,
    handleChangeDate,
    getReportInProgress
  } = useReportsHandler()

  return (
    <>
      <Flex align="center" gap={5}>
        <Heading>Reports</Heading>
      </Flex>
      <Flex align="center" wrap="wrap" gap={5} mt={5}>
        <Button
          colorScheme="gray"
          size="md"
          onClick={() => navigate('/orders')}
        >
          Back
        </Button>
        <Button
          colorScheme="blue"
          size="md"
          onClick={() => navigate('view/shipments-in-warning')}
        >
          Shipments in warning
        </Button>
        <Divider mt={5}/>
        <Stack gap={5} mt={5}>
          <FormControl width={250} isInvalid={filter.fromDateError !== ''}>
            <FormLabel>From date</FormLabel>
            <Input type='date' name='fromDate' onChange={handleChangeDate} />
            {filter.fromDateError && <FormErrorMessage>{filter.fromDateError}</FormErrorMessage>}
          </FormControl>
          <FormControl width={250} isInvalid={filter.toDateError !== ''}>
            <FormLabel>To date</FormLabel>
            <Input type='date' name='toDate' onChange={handleChangeDate} />
            {filter.toDateError && <FormErrorMessage>{filter.toDateError}</FormErrorMessage>}
          </FormControl>
          <Button
            colorScheme="blue"
            size="md"
            onClick={getReportInProgress}
          >
            Shipments in progress
          </Button>
        </Stack>
      </Flex>
    </>
  )
}
