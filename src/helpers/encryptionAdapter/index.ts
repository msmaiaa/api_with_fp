import argon2 from 'argon2'
import config from '@/config'

type hashStringFn = (data: string) => Promise<string>
type verifyHashFn = (data: string) => Promise<boolean>

const hashString: hashStringFn = (data) => argon2.hash(data)
const verifyHash: verifyHashFn = (data) => argon2.verify(data, config.encryptionSalt as string)

export { verifyHash, hashString }
