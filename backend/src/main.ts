import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  // Security 
  app.use(helmet());

  // logging
  app.use(morgan('combined'));

  // cors
  app.use(
    cors({
      origin: [process.env.FRONTEND_URL || 'http://localhost:3000/'],
      credentials: true,
    })
  )

  // validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  app.setGlobalPrefix('api')
  const port = process.env.PORT ?? 8000;

  await app.listen(port);

  logger.log(`Server is running on: http://localhost:${port}/api`);
}
bootstrap();
