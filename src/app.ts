import express from 'express'
import cors from 'cors'
import prisma from './infra/prisma'
import config from './config'
import { logger, loggerParams } from './middlewares/logger'
import appRouter from './routes'
const app = express()
const API_VERSION = config.apiVersion

app.use(logger(loggerParams))
app.use(cors())
app.use(express.json())

app.use(`/api/${API_VERSION}/`, appRouter)

const start = async () => {
  try {
    app.listen(config.port, '0.0.0.0', () => {
      console.log(`Server listening at http://localhost:${config.port}`)
    })
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
  }
}
export default start
