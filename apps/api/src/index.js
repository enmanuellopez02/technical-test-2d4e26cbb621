import express from 'express'
import cors from 'cors'
import itemsRoute from './routes/items.routes.js'
import ordersRoute from './routes/orders.routes.js'
import fileDirName from './file-dir-name.js'
import { join } from 'path'

const { __dirname } = fileDirName(import.meta)
const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(join(__dirname, '../../client/dist')))
app.use('/api', express.static(join(__dirname, 'public')))
app.use('/api', ordersRoute)
app.use('/api', itemsRoute)

app.listen(3000)
console.log('Server on port', 3000)