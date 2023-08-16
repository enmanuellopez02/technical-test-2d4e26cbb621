import React from "react"
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import router from "./configurations/router"

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App