import { PrismaClient, Prisma } from "@prisma/client";

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function getRandomDate() {
  return new Date().addDays(Math.floor(Math.random() * 3) + 1)
}

const prisma = new PrismaClient();
const orderData = [
  {
    cliente: "Juan Peréz",
    shippingAddress: "calle prueba 1",
    shippingPromise: getRandomDate(),
    items: {
      create: [
        {
          title: "Camera",
          description: "Photographic camera",
          url: "/api/images/camera.png",
          price: 10.5,
          quantity: 1,
        },
        {
          title: "Cap",
          description: "New era cap",
          url: "/api/images/cap.webp",
          price: 30,
          quantity: 2,
        },
      ]
    },
  },
  {
    cliente: "María Fernanda",
    shippingAddress: "calle prueba 2",
    shippingPromise: getRandomDate(),
    items: {
      create: [
        {
          title: "Jacket",
          description: "Blue jacket with designs",
          url: "/api/images/jacket.png",
          price: 120,
          quantity: 1,
        },
        {
          title: "Laptop",
          description: "Macbook Pro m1 14 inch",
          url: "/api/images/laptop.png",
          price: 800,
          quantity: 1,
        },
      ]
    },
  },
  {
    cliente: "Jean Carlos",
    shippingAddress: "calle prueba 3",
    shippingPromise: getRandomDate(),
    items: {
      create: [
        {
          title: "iPhone 14",
          description: "iPhone 14 Mini",
          url: "/api/images/telephone.png",
          price: 600,
          quantity: 1,
        },
        {
          title: "Sweater",
          description: "Sweater padded",
          url: "/api/images/sweater.webp",
          price: 80,
          quantity: 1,
        },
      ]
    },
  },
  {
    cliente: "Cesar Arturo",
    shippingAddress: "calle prueba 4",
    shippingPromise: getRandomDate(),
    items: {
      create: [
        {
          title: "iPhone 14",
          description: "iPhone 14 Mini",
          url: "/api/images/telephone.png",
          price: 600,
          quantity: 1,
        },
      ]
    },
  },
  {
    cliente: "Carolin Santana",
    shippingAddress: "calle prueba 5",
    shippingPromise: getRandomDate(),
    items: {
      create: [
        {
          title: "Camera",
          description: "Photographic camera",
          url: "/api/images/camera.png",
          price: 200,
          quantity: 3,
        },
      ]
    },
  },
  {
    cliente: "Cristian Rosado",
    shippingAddress: "calle prueba ",
    shippingPromise: getRandomDate(),
    items: {
      create: [
        {
          title: "Camera",
          description: "Photographic camera",
          url: "/api/images/camera.png",
          price: 200,
          quantity: 4,
        },
        {
          title: "Cap",
          description: "New era cap",
          url: "/api/images/cap.webp",
          price: 30,
          quantity: 2,
        },
      ]
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)

  for (const order of orderData) {
    const newOrder = await prisma.orden.create({
      data: order
    })
    console.log(`Created order with id: ${newOrder.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })