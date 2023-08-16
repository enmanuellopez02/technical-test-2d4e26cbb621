import React from 'react'
import { useGetOrdersInProgressQuery } from '../../services/orderApi'
import ReportView from './components/ReportView'
import CustomAlert from '../../components/CustomAlert'
import { useSearchParams } from 'react-router-dom'

export default function ShipmentsInProgress() {
  const [params] = useSearchParams()
  
  const {
    data: orders,
    isError,
    error,
  } = useGetOrdersInProgressQuery({ fromdate: params.get('fromdate'), todate: params.get('todate')})

  return (
    <>
      {isError && (
        <CustomAlert status="error" title="Erro:" message={error.error} />
      )}
      <div>
        <ReportView orders={orders} />
      </div>
    </>
  )
}
