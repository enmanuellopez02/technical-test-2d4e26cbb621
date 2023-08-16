import React, { Fragment } from "react"
import {
  Heading,
  Box,
  Divider,
  Text,
  Flex,
  Select,
} from "@chakra-ui/react"
import OrderColumnInfo from "./OrderColumnInfo"
import useOrderHandler from "../hooks/useOrderHandler"
import useFormatDate from "../../../hooks/useFormatDate"

export default function OrdersList({ orders, updateOrderStatus }) {
  const { getOrderTotal } = useOrderHandler()
  const formatDate = useFormatDate()

  return (
    <>
      {orders &&
        orders.map((order) => (
          <Fragment key={order.id}>
            <Box mt="30px">
              <Box bg={"blackAlpha.50"} p={5}>
                <Flex align="center" gap={2} mb={4}>
                  <Text as="span">Status:</Text>
                  <Select
                    width="2xs"
                    variant="filled"
                    bg="white"
                    value={order.status}
                    size="sm"
                    onChange={(e) =>
                      updateOrderStatus({
                        id: order.id,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value="Approve">Approve</option>
                    <option value="Cancel">Cancel</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Traveling">Traveling</option>
                  </Select>
                </Flex>
                <Flex justify="space-between" gap={5} wrap="wrap">
                  <OrderColumnInfo desc="Order number" value={order.id} />
                  <OrderColumnInfo desc="Cliente" value={order.cliente} />
                  <OrderColumnInfo
                    desc="Address"
                    value={order.shippingAddress}
                  />
                  <OrderColumnInfo
                    desc="Order date"
                    value={formatDate(order.createDate)}
                  />
                  <OrderColumnInfo
                    desc="Order total"
                    value={getOrderTotal(order.items)}
                  />
                  <OrderColumnInfo
                    desc="Estimated date"
                    value={formatDate(order.shippingPromise)}
                  />
                </Flex>
              </Box>
              <Heading as="h4" size="sm" mt={5} ml={5}>
                Items info
              </Heading>
              {order.items.map((item) => (
                <Flex key={item.id} as="article" py={4}>
                  <Box pr={10}>
                    <img
                      src={"http://localhost:3000" + item.url}
                      alt={item.title}
                      width="150"
                    />
                  </Box>
                  <Box>
                    <Text fontSize="sm" mb={2}>
                      Title: {item.title}
                    </Text>
                    <Text fontSize="sm" mb={2}>
                      Description: {item.description}
                    </Text>
                    <Text fontSize="sm" mb={2}>
                      Price: US ${item.price}
                    </Text>
                    <Text fontSize="sm" mb={2}>
                      Quantity: {item.quantity}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Box>
            <Divider />
          </Fragment>
        ))
      }
    </>
  );
}
