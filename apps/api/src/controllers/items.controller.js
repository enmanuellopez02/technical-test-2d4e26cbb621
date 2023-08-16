import { prisma } from "../db.js"

export const getItems = async (req, res) => {
  const items = await prisma.item.findMany({
    // include: {
    //   orden: true
    // }
  })

  res.json(items)
}

export const getItem = async (req, res) => {
  const itemFound = await prisma.item.findFirst({
    where:  {
        id: parseInt(req.params.id)
    },
    // include: {
    //     orden: true
    // }
  })

  if(!itemFound) 
      return res.status(404).json({ error: "Item not found" })

  res.json(itemFound)
}

export const createItem = async (req, res) => {
  const {title, description, url, price, quantity, ordenId} = req.body
  
  try {
    const newItem = await prisma.item.create({
      data: {
        title,
        description,
        url,
        price,
        quantity,
        ordenId
      }
    })

    res.json(newItem)
  }
  catch(error) {
    res.status(500).json({message: error.message})
  }
}

export const updateItem = async (req, res) => {
  const {title, description, url, price, quantity, ordenId} = req.body

  try {
    const itemUpdated = await prisma.item.update({
        where:  {
            id: parseInt(req.params.id)
        },
        data: {
          title,
          description,
          url,
          price,
          quantity,
          ordenId
        }
    })
  
    if(!itemUpdated) 
        return res.status(404).json({ error: "Item not found" })
    
    res.json(itemUpdated)
  }
  catch(error) {
    res.status(500).json({message: error.message})
  }
}

export const deleteItem = async (req, res) => {
  const itemDeleted = await prisma.item.delete({
      where:  {
          id: parseInt(req.params.id)
      }
  })

  if(!itemDeleted) 
      return res.status(404).json({ error: "Item not found" })
  
  res.json(itemDeleted)
}