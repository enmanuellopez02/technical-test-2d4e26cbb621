import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from 'react-router-dom'

// layouts
import RootLayout from '../layouts/RootLayout'
import ReportLayout from '../layouts/ReportLayout'

// pages
import Orders from '../pages/orders/Orders'
import Reports from '../pages/reports/Reports'
import ShipmentsInWarning from '../pages/reports/ShipmentsInWarning'
import ShipmentsInProgress from '../pages/reports/ShipmentsInProgress'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to='orders' replace={true} />} />
        <Route path="orders" element={<Orders />} />
        <Route path="reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/reports/view/" element={<ReportLayout />}>
        <Route path="shipments-in-warning" element={<ShipmentsInWarning />} />
        <Route path="shipments-in-progress" element={<ShipmentsInProgress />} />
      </Route>
    </Route>
  )
)

export default router