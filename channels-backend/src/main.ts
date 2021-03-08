import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ChannelService } from './channel/channel.service';
import { Logger, ValidationPipe } from '@nestjs/common';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(port);

  // const channelService = app.get(ChannelService);
  // await channelService.parseEpg();
  // await channelService.parsePlaylist();
  // await channelService.parseXml();
  // await channelService.test();
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
