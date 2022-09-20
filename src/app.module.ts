import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { UserModule } from '#/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.development',
        '.env.production',
        '.env.testing',
        '.env.staging',
        '.env'
      ]
    }),
    UserModule
  ]
})
export class AppModule {}
