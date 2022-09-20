import { NestFactory } from '@nestjs/core'
import { Transport, MicroserviceOptions } from '@nestjs/microservices'
import { join } from 'path'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: 'hero',
        protoPath: join(process.cwd(), 'src', 'protobuffs', 'hero.proto'),
        loader: {
          keepCase: true,
          longs: Number,
          enums: String,
          defaults: false,
          arrays: true,
          objects: true,
          includeDirs: [join(process.cwd(), 'src', 'protobufs')]
        }
      }
    }
  )

  await app.listen()
}

bootstrap()
