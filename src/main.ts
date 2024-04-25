import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('crypto app backend')
    .setDescription('The crypto API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const logRequest = require('./logger');
  app.use(logRequest)

  const port = process.env.PORT || 3000; // Use environment port or default to 3000
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();

