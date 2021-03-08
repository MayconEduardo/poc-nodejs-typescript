import { UsersRepository } from '../../repositories/Users/UsersRepository'
import { UserController } from './UserController'
import { UserUseCase } from './UserUseCase'

const usersRepository = new UsersRepository()

const userUseCase = new UserUseCase(usersRepository)

const userController = new UserController(userUseCase)

export { userController }
