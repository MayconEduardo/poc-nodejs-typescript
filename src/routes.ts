import { Router } from 'express'
import { userController } from './useCases/User'

const router = Router()

router.post('/users', (request, response) => {
  return userController.create(request, response)
})

export { router }
