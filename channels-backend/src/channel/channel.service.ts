import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Channel } from './entities/channel.entity';
import { Category } from './entities/category.entity';

@Injectable()
export class ChannelService {
  constructor(
    @InjectRepository(Channel)
    private readonly channelRepository: Repository<Channel>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  // async parseEpg() {
  //   const xmlData = fs.readFileSync('./data/edem_epg_ico.m3u8', 'utf-8');
  //   const data = parse(xmlData);
  //   const channels = Object.values(data.items);
  //   console.log(channels.length);
  //
  //   let count = 1;
  //   for (const value of channels) {
  //     // if (count > 1) {
  //
  //     // console.log(value);
  //     // console.log('YOUR DIE MESSAGE HERE');
  //     // process.exit(1);
  //
  //     const channel = new Channel();
  //     channel.channel_id = +value.url.split('/')[5];
  //     channel.channel_name_id = +value.tvg.id;
  //     channel.name = value.name;
  //     channel.group = value.group.title;
  //     channel.url = value.url;
  //     channel.logo = value.tvg.logo;
  //     channel.rec = +value.tvg.rec;
  //     channel.raw = value.raw;
  //
  //     try {
  //       const result = this.channelRepository.create(channel);
  //       await this.channelRepository.save(result);
  //       console.log('save ' + +value.tvg.id);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //
  //     // console.log('YOUR DIE MESSAGE HERE');
  //     // process.exit(1);
  //     // }
  //     count++;
  //   }
  //
  //   console.log('YOUR DIE MESSAGE HERE');
  //   process.exit(1);
  // }
  //
  // async parsePlaylist() {
  //   const xmlData = fs.readFileSync(
  //     './data/edem_epg_ico_new_home240121.m3u8',
  //     'utf-8',
  //   );
  //   const data = parse(xmlData);
  //   const channels = Object.values(data.items);
  //   console.log(channels.length);
  //
  //   let count = 1;
  //   for (const value of channels) {
  //     // if (count > 1) {
  //
  //     // console.log(value);
  //     // console.log('YOUR DIE MESSAGE HERE');
  //     // process.exit(1);
  //
  //     const channel = new Channel();
  //     channel.channel_id = +value.url.split('/')[5];
  //     channel.channel_name_id = +value.tvg.id;
  //     channel.name = value.name;
  //     channel.group = value.group.title;
  //     channel.url = value.url;
  //     channel.logo = value.tvg.logo;
  //     channel.rec = +value.tvg.rec;
  //     channel.raw = value.raw;
  //
  //     try {
  //       const result = this.channelRepository.create(channel);
  //       await this.channelRepository.save(result);
  //       console.log('save ' + count);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //
  //     // console.log('YOUR DIE MESSAGE HERE');
  //     // process.exit(1);
  //     // }
  //     count++;
  //   }
  //
  //   console.log('YOUR DIE MESSAGE HERE');
  //   process.exit(1);
  // }
  //
  // async parseXml() {
  //   const xmlData = fs.readFileSync('./data/epg.xml', 'utf-8');
  //   let channels = [];
  //   parseString(xmlData, function (err, result) {
  //     channels = Object.values(result.tv.channel);
  //   });
  //   console.log(channels.length);
  //
  //   let count = 1;
  //   for (const value of channels) {
  //     console.log(JSON.stringify(value));
  //
  //     const channels = await this.channelRepository.find({
  //       where: { channel_name_id: value['$'].id },
  //     });
  //
  //     for (const channel of channels) {
  //       try {
  //         channel.lang = value['display-name'][0]['$'].lang;
  //         await this.channelRepository.save(channel);
  //         console.log(`save ${count}`);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //
  //     count++;
  //   }
  //
  //   console.log('YOUR DIE MESSAGE HERE');
  //   process.exit(1);
  // }
  //
  // async test() {
  //   //# get lang list distinct
  //   // const list = await this.channelRepository
  //   //   .createQueryBuilder()
  //   //   .select(['lang'])
  //   //   .distinct(true)
  //   //   .getRawMany();
  //
  //   // ////# get group list distinct
  //   // const list = await this.channelRepository
  //   //   .createQueryBuilder('channel')
  //   //   .select(['channel.group'])
  //   //   .distinct(true)
  //   //   .getRawMany();
  //
  //   ////# write category entity
  //   // const groupList = [];
  //   //
  //   // for (const value of groupList) {
  //   //   const category = new Category();
  //   //   category.name = value;
  //   //
  //   //   try {
  //   //     const result = this.categoryRepository.create(category);
  //   //     await this.categoryRepository.save(result);
  //   //     console.log('save ' + value);
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   // }
  //
  //   //# get by id of array
  //   // const list = await this.categoryRepository
  //   //   .createQueryBuilder()
  //   //   .where('lang IN (:...ids)', {
  //   //     ids: ['tr', 'de', 'pl', 'fr', 'es', 'ro', 'ka', 'he'],
  //   //   })
  //   //   .andWhere('status = :status', { status: 1 })
  //   //   .getCount();
  //
  //   //# update all
  //   // const list = await this.channelRepository
  //   //   .createQueryBuilder()
  //   //   .update()
  //   //   .set({ status: 0 })
  //   //   .where('lang IN (:...ids)', {
  //   //     ids: ['tr', 'de', 'pl', 'fr', 'es', 'ro', 'ka', 'he'],
  //   //   })
  //   //   .execute();
  //
  //   // console.log(list);
  //
  //   console.log('YOUR DIE MESSAGE HERE');
  //   process.exit(1);
  // }

  async findAll() {
    const channelList = await this.channelRepository
      .createQueryBuilder('channel')
      // .select(['channel.id', 'channel.name'])
      .orderBy('channel.sort', 'DESC')
      .addOrderBy('category.sort', 'ASC')
      // .addOrderBy('channel.name', 'ASC')

      .andWhere('channel.status = 1')
      .andWhere('category.status = 1')
      .leftJoinAndMapOne(
        'channel.category',
        Category,
        'category',
        'category.name = channel.group',
      )
      .limit(300)
      .getMany();

    let counter = 1;
    channelList.forEach((channel: Channel, index) => {
      channelList[index].counter = counter;
      counter++;
    });

    return channelList;
  }

  async findOne(id: string) {
    return this.channelRepository.findOne(String(id));
  }

  async update(id: string, updateChannelDto: any) {
    const channel = await this.channelRepository.preload({
      id: +id,
      ...updateChannelDto,
    });
    if (!channel) {
      throw new NotFoundException(`Channel #${id} not found`);
    }
    return this.channelRepository.save(channel);
  }
}
