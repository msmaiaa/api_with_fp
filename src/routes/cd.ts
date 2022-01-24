import express from 'express'
import * as routes from '@/core/v1/cd/use-cases'
import { requireLogin } from '@/middlewares/auth'
const router = express.Router()

router.get('/', routes.showAll)
router.get('/:id', routes.show)
router.use(requireLogin)
router.post('/', routes.create)
router.put('/', routes.update)
router.delete('/:id', routes._delete)

export default router
