import React from 'react'
import {
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react"
import { useGetOrdersQuery, useUpdateOrderMutation } from '../../services/orderApi'
import OrdersList from './components/OrdersList'
import CustomAlert from "../../components/CustomAlert"
import CircularLoading from "../../components/CircularLoading"
import OrdersListSkeleton from "./components/OrdersListSkeleton"
import useOrderHandler from './hooks/useOrderHandler'
import { useNavigate } from 'react-router-dom'

export default function Orders() {
  const navigate = useNavigate()
  const {
    data: orders,
    isError,
    isLoading,
    isFetching,
    error,
  } = useGetOrdersQuery()
  const [
    updateOrderStatus,
    { isError: isErrorUpdate, isSuccess: isSuccessUpdate, error: errorUpdate },
  ] = useUpdateOrderMutation()
  const { reportWarningInProgress } = useOrderHandler()

  return (
    <>
      <Flex align="center" gap={5}>
        <Heading>Orders</Heading>
        {isLoading || (isFetching && <CircularLoading />)}
      </Flex>
      <Flex align="center" gap={5} mt={5}>
        <Button
          colorScheme="blue"
          size="sm"
          isLoading={reportWarningInProgress}
          loadingText="creating"
          onClick={() => navigate('/reports')}
        >
          Reports
        </Button>
      </Flex>
      {isError && (
        <CustomAlert status="error" title="Erro:" message={error.error} />
      )}
      {isErrorUpdate && (
        <CustomAlert status="error" title="Erro:" message={errorUpdate.error} />
      )}
      {isSuccessUpdate && (
        <CustomAlert
          status="success"
          title="Success:"
          message="Order updated successfuly"
        />
      )}
      {isLoading && <OrdersListSkeleton />}
      <OrdersList orders={orders} updateOrderStatus={updateOrderStatus} />
    </>
  )
}
