import express from 'express'
import * as routes from '@/core/v1/user/use-cases'
const router = express.Router()

router.post('/', routes.create)

export default router
