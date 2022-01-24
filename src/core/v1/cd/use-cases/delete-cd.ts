import { RequestHandler } from 'express'

const _delete: RequestHandler = async (req, res) => {
  return res.status(200).json({ message: 'ok' })
}

export { _delete }
