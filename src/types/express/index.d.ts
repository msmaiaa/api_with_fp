import { JWTPayload } from 'jose'

declare global {
  declare namespace Express {
    interface Request {
      decoded?: JWTPayload
    }
  }
}
