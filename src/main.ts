import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
  // app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder().setTitle("api apps").setDescription("desc app").setVersion("1.0.0").addTag("task app")
    .build()

  const swaggerDocument = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/", app, swaggerDocument)






  await app.listen(3000);
} bootstrap();
