import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ChannelService } from './channel.service';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get('list')
  list() {
    return this.channelService.findAll();
  }

  @Get('info/:id')
  info(@Param('id') id: string) {
    return this.channelService.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body(ValidationPipe) updateChannelDto: any) {
    return this.channelService.update(id, updateChannelDto);
  }

  // @Get('parsePlaylist')
  // async parsePlaylist() {
  //   return this.channelService.parsePlaylist();
  // }
}
