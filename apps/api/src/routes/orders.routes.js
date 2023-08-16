import { Router } from "express"
import { 
  getOrders,
  getOrdersInWarning,
  getOrdersInProgress,
  createOrder, 
  updateOrder 
} from "../controllers/orders.controller.js"

const router = Router()

router.get('/orders', getOrders)
router.get('/orders/in-warning', getOrdersInWarning)
router.get('/orders/in-progress', getOrdersInProgress)
router.post('/orders', createOrder)
router.put('/orders/:id', updateOrder)

export default router