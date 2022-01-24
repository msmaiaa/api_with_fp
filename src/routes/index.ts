import userRouter from './user'
import cdRouter from './cd'
import purchaseRouter from './purchase'
import express from 'express'
const appRouter = express.Router()

appRouter.use('/user', userRouter)
appRouter.use('/cd', cdRouter)
appRouter.use('/purchase', purchaseRouter)

export default appRouter
