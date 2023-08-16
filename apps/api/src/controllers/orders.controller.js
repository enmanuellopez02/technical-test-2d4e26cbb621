import { prisma } from "../db.js"

export const getOrders = async (req, res) => {
  const orders = await prisma.orden.findMany({
      include: {
          items: true
      }
  })

  res.json(orders)
}

export const getOrdersInWarning = async (req, res) => {
  const date = new Date()
  date.setDate(date.getDate() - 2)
  
  const orders = await prisma.orden.findMany({
    where: {
      status: "Approve",
      shippingPromise: {
        lte: new Date().toISOString(),
        gte: date.toISOString(),
      }
    },
    include: {
        items: true
    }
  })

  res.json(orders)
}

export const getOrdersInProgress = async (req, res) => {
  const {fromdate, todate} = req.query
  
  const orders = await prisma.orden.findMany({
      where: {
        status: "Traveling",
        createDate: {
          lte: new Date(todate).toISOString(),
          gte: new Date(fromdate).toISOString(),
        }
      },
      include: {
          items: true
      }
  })

  res.json(orders)
}

export const getOrder = async (res, req) => {
  const orderFound = await prisma.orden.findFirst({
    where: {
      id: parseInt(req.params.id)
    },
    include: {
      items: true
    }
  })

  if(!orderFound)
    res.status(404).json({ error: "Order not found" })

  res.json(orderFound)
}

export const createOrder = async (req, res) => {
  const {cliente, shippingAddress, shippingPromise, items} = req.body
  
  try {
    const newOrder = await prisma.orden.create({
      data: {
        cliente,
        shippingAddress,
        shippingPromise,
        items: {
          create: items
        }
      }
    })
    
    res.json(newOrder)
  } 
  catch(error) {
    res.status(500).json({message: error.message})
  }
}

export const updateOrder = async (req, res) => {
  const {status} = req.body
  const statusExpect = ['Approve', 'Cancel', 'Delivery', 'Traveling']

  if(!statusExpect.includes(status)) {
    res.status(404).json({message: `This status: ${status} is not permit`})
    return
  }

  try {
    const orderUpdated = await prisma.orden.update({
        where:  {
            id: parseInt(req.params.id)
        },
        data: {
          status
        }
    })
  
    if(!orderUpdated) 
        return res.status(404).json({ error: "Order not found" })
    
    res.json(orderUpdated)
  }
  catch(error) {
    res.status(500).json({message: error.message})
  }
}

export const deleteOrder = async (req, res) => {
  const orderDeleted = await prisma.orden.delete({
      where:  {
          id: parseInt(req.params.id)
      }
  })

  if(!orderDeleted) 
      return res.status(404).json({ error: "Order not found" })
  
  res.json(orderDeleted)
}