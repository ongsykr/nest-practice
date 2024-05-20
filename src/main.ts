import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LectureModule } from './lecture/lecture.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const lecture = await NestFactory.create(LectureModule);
  await app.listen(3000);
}
bootstrap();
