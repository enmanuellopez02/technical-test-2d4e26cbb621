import React from "react"
import { Box, Text } from "@chakra-ui/react"

export default function OrderColumnInfo({ desc, value }) {
  return (
    <Box color="blackAlpha.700">
      <Text color="black" as="span">
        {desc + ": "}
      </Text>
      <Text>{value}</Text>
    </Box>
  );
}
