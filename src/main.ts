import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', 
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders: 'Content-Type,Authorization',
  });

  const configService = app.get(ConfigService);

  const port = configService.get<number>('port');

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Twitter clone')
    .setDescription(
      `The Twitter-clone rest api project was written by https://t.me/a_abduvoh1d`,
    )
    .setVersion('1.0')
    .addTag('Twitter')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/api', app, document);

  await app.listen(port);

  console.log(`Application is running on ${await app.getUrl()}`);
}
bootstrap();
