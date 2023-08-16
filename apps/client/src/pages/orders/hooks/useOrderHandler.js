export default function useOrderHandler() {
  const getOrderTotal = items => `$${items.reduce((total, item) => total + (item.price * item.quantity), 0)}`
  
  return {
    getOrderTotal
  }
}
