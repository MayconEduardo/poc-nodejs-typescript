import { User } from '../../entities/User'
import { IUsersRepository } from '../../repositories/Users/IUsersRepository'
import { IUserRequest } from './IUserRequest'

class UserUseCase {
  constructor (private usersRepository: IUsersRepository) {}

  async create (userRequest: IUserRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(userRequest.email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User()

    user.name = userRequest.name
    user.email = userRequest.email
    user.password = userRequest.password

    const userResponse = await this.usersRepository.create(user)

    return userResponse
  }
}

export { UserUseCase }
