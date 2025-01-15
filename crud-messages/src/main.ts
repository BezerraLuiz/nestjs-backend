import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove keys dont contain in DTO
      forbidNonWhitelisted: true, // Error when key dont exists
      // transform: true, // Transform data types params and DTOs
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
