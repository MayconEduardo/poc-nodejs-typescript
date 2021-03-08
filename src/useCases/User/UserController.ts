import { Request, Response } from 'express'
import { IUserRequest } from './IUserRequest'
import { UserUseCase } from './UserUseCase'

class UserController {
  constructor (private userUseCase: UserUseCase) {}

  async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const userRequest: IUserRequest = {
      name,
      email,
      password
    }

    try {
      const user = await this.userUseCase.create(userRequest)

      return response.status(201).json(user)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export { UserController }
