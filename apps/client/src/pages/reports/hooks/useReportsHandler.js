import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  fromDate: "",
  fromDateError: "",
  toDate: "",
  toDateError: ""
}

export default function useReportsHandler() {
  const [filter, setFilter] = useState(initialState)
  const navigate = useNavigate()

  const handleChangeDate = e => {
    const { name, value } = e.target
    setFilter(prev => ({...prev, [name]: value, [`${name}Error`]: ''}))
  }

  const getReportInProgress = () => {
    const { fromDate, toDate } = filter

    if(fromDate === '')
      setFilter(prev => ({...prev, fromDateError: 'From date is required'}))

    if(toDate === '')
      setFilter(prev => ({...prev, toDateError: 'To date is required'}))
    
    if(fromDate !== '' && toDate !== '')
      navigate(`view/shipments-in-progress?fromdate=${fromDate}&todate=${toDate}`)
  }

  return {
    filter,
    navigate,
    handleChangeDate,
    getReportInProgress
  }
}
