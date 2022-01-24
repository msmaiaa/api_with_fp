import express from 'express'
import * as routes from '@/core/v1/purchase/use-cases'
import { requireLogin } from '@/middlewares/auth'
const router = express.Router()

router.use(requireLogin)
router.post('/', routes.create)

export default router
