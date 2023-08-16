import React, { useEffect } from 'react'
import { Heading } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigation = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigation("/")
    }, 2000);
  }, [])

  return (
    <Heading>404 Page Not Found</Heading>
  )
}
