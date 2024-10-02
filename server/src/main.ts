import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

type Environment = 'development' | 'production' | 'test';
const envToLogger: Record<Environment, object | boolean> = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}
const currentEnv: Environment = (process.env.NODE_ENV as Environment) || 'development';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: envToLogger[currentEnv],
    })
  );
  await app.listen(3000, '0.0.0.0');
}
bootstrap();

