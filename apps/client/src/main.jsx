import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { orderApi } from './services/orderApi'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={orderApi}>
    <App />
  </ApiProvider>
)
