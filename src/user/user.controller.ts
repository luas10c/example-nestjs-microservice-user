import { Controller } from '@nestjs/common'
import { GrpcMethod, RpcException } from '@nestjs/microservices'
import { status } from '@grpc/grpc-js'
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js'

import { type UsersOutput, type UserOutput } from '#/common/types/outputs/user'

import { UserService } from './user.service'

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('HeroService', 'getUsers')
  async getUsers(): Promise<UsersOutput> {
    try {
      const users = await this.userService.getUsers()
      return {
        users
      }
    } catch (error) {
      throw new RpcException({
        message: 'Hello, World',
        code: status.NOT_FOUND
      })
    }
  }

  @GrpcMethod('HeroService', 'getUserById')
  async getUserById(
    data: any,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>
  ): Promise<UserOutput> {
    const { id } = call.request

    const user = await this.userService.getUserById(id)

    return { user }
  }

  @GrpcMethod('HeroService', 'getUserByEmail')
  async getUserByEmail(
    data: any,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>
  ): Promise<UserOutput> {
    const { email } = call.request
    const user = await this.userService.getUserByEmail(email)

    return { user }
  }

  @GrpcMethod('HeroService', 'getUserByUsername')
  async getUserByUsername(
    data: any,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>
  ): Promise<UserOutput> {
    const { username } = call.request
    const user = await this.userService.getUserByUsername(username)
    return { user }
  }
}
