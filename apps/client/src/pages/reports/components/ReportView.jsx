import React, { Fragment } from 'react'
import {
  Heading,
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react"
import OrderColumnInfo from '../../orders/components/OrderColumnInfo'
import useFormatDate from '../../../hooks/useFormatDate'
import useShipmentsInWarningHandler from '../hooks/useShipmentsInWarningHandler'

export default function ReportView({ orders }) {
  const formatDate = useFormatDate()
  const { getOrderTotal } = useShipmentsInWarningHandler()

  return (
    <>
      <Heading mb={20}>Tiendamia - Report</Heading>
      {orders?.map(order => 
        (
          <Fragment key={order.id}>
            <Flex justify="space-between" gap={5} wrap="wrap" mb={10} bg="blackAlpha.50" p={5}>
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
            <TableContainer mb={10}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Item title</Th>
                    <Th>Item Description</Th>
                    <Th isNumeric>Quantity</Th>
                    <Th isNumeric>Price</Th>
                    <Th isNumeric>Total</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {order.items.map(item => (
                    <Tr key={item.id}>
                      <Td>{item.title}</Td>
                      <Td>{item.description}</Td>
                      <Td isNumeric>{item.quantity}</Td>
                      <Td isNumeric>${item.price}</Td>
                      <Td isNumeric>${item.quantity * item.price}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th isNumeric colSpan={5}>Total: {getOrderTotal(order.items)}</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Fragment>
        )
      )}
    </>
  )
}
