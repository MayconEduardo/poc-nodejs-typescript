import { User } from '../../entities/User'
import { IUsersRepository } from './IUsersRepository'

class UsersRepository implements IUsersRepository {
  async create (user: User): Promise<User> {
    return user
  }

  async findByEmail (email: string): Promise<User> {
    const user = new User()

    if (email !== '') {
      return null
    }
    return user
  }
}

export { UsersRepository }
