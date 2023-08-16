import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  useDisclosure
} from "@chakra-ui/react";

export default function CustomAlert({ status, title, message }) {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

  return isOpen ? (
    <Alert status={status} mt={5}>
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      <CloseButton 
        alignSelf='flex-start'
        ml="auto"
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : <></>
}
