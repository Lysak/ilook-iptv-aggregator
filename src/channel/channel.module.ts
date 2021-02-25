import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelController } from './channel.controller';
import { Channel } from './entities/channel.entity';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Channel, Category])],
  providers: [ChannelService],
  controllers: [ChannelController],
})
export class ChannelModule {}
