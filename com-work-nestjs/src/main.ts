import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // for class validator
  app.getHttpAdapter().getInstance().set('etag', false); // disabling etag for more security
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  await app.listen(3000);
}
bootstrap();
