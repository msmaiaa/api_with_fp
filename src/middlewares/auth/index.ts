import { RequestHandler } from 'express'
import { verifyJWT } from '@/infra/auth/jwt'

const requireLogin: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    const decoded = await verifyJWT(token)
    if (decoded) {
      req.decoded = decoded.payload
      return next()
    }
    return res.status(401).json({ error: 'vá tomar no cu!' })
  } catch (e: any) {
    return res.status(e.code).json({ error: e.message })
  }
}

export { requireLogin }
