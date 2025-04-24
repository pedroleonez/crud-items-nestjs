import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // configure swagger
  const config = new DocumentBuilder()
    .setTitle('CRUD Items API')
    .setDescription('API para o meu CRUD de itens')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  // configure global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false },
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
