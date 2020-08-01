import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HERO_PACKAGE_NAME } from './hero/hero';
import { join } from 'path';

async function bootstrap() {
  const protosDir = join(__dirname, 'protos');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:5000',
        package: HERO_PACKAGE_NAME,
        protoPath: 'hero.proto',
        loader: {
          keepCase: false,
          includeDirs: [protosDir],
        },
      },
    },
  );

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  app.listen(() => {
  });
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
