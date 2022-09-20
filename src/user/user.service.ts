import { Injectable, Inject } from '@nestjs/common'
import { type User } from '@prisma/client'

import { PrismaService } from './../prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(
    @Inject('PRISMA_SERVICE') private readonly prismaService: PrismaService
  ) {}

  async getUsers(): Promise<User[]> {
    const data = await this.prismaService.user.findMany()
    return data
  }

  async getUserById(id: string): Promise<User> {
    const data = await this.prismaService.user.findFirst({
      where: {
        id
      }
    })

    return data
  }

  async getUserByEmail(email: string): Promise<User> {
    const data = await this.prismaService.user.findFirst({
      where: {
        email
      }
    })

    return data
  }

  async getUserByUsername(username: string) {
    const data = await this.prismaService.user.findFirst({
      where: {
        username
      }
    })

    return data
  }
}
