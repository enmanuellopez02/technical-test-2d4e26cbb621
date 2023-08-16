import React from 'react'
import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Container as="section" maxWidth="4xl" my="30px">
        <Outlet />
      </Container>
    </>
  )
}
