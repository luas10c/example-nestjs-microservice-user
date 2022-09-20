import { Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'

@Module({
  providers: [
    PrismaService,
    {
      provide: 'PRISMA_SERVICE',
      useClass: PrismaService
    }
  ],
  exports: [
    {
      provide: 'PRISMA_SERVICE',
      useClass: PrismaService
    }
  ]
})
export class PrismaModule {}
