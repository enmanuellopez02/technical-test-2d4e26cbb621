import React from 'react'
import { Box, Container, Button, Center } from '@chakra-ui/react'
import { Outlet, useNavigate } from 'react-router-dom'
import useShipmentsInWarningHandler from '../pages/reports/hooks/useShipmentsInWarningHandler'

export default function ReportLayout() {
  const navigate = useNavigate()
  const { pdfRef, downloadPDF } = useShipmentsInWarningHandler()

  return (
    <Container as="section" maxWidth="5xl" my="30px">
      <Box p={8} borderWidth="1px" ref={pdfRef}>
        <Outlet />
      </Box>
      <Center mt={5}>
        <Button
          colorScheme="gray"
          size="md"
          mr={5}
          onClick={() => navigate('/reports')}
        >
          Back
        </Button>
        <Button
          colorScheme="blue"
          size="md"
          onClick={downloadPDF}
        >
          Download PDF
        </Button>
      </Center>
    </Container>
  )
}
