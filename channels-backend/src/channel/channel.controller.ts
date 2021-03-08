import { Controller, Get } from '@nestjs/common';
import { ChannelService } from './channel.service';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  async findAll() {
    return this.channelService.findAll();
  }

  @Get('parsePlaylist')
  async parsePlaylist() {
    return this.channelService.parsePlaylist();
  }
}
