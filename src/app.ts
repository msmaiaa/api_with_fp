import config from './config'
import express from 'express'
import { logger, loggerParams } from './middlewares/logger'
const app = express()

app.use(logger(loggerParams))

const start = () => {
  try {
    app.listen(config.port, '0.0.0.0', () => {
      console.log(`Server listening at http://localhost:${config.port}`)
    })
  } catch (e) {
    console.error(e)
  }
}

export default start
