import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ChannelService } from './channel/channel.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(3000);

  const channelService = app.get(ChannelService);
  // await channelService.parseEpg();
  // await channelService.parsePlaylist();
  // await channelService.parseXml();
  await channelService.test();
}
bootstrap();
