import React from 'react'
import { useGetOrdersInWarningQuery } from '../../services/orderApi'
import ReportView from './components/ReportView'
import CustomAlert from '../../components/CustomAlert'

export default function ShipmentsInWarning() {
  const {
    data: orders,
    isError,
    error,
  } = useGetOrdersInWarningQuery()

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
