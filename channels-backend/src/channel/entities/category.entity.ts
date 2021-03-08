import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Channel } from './channel.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 100 })
  sort: number;

  @Column({ default: 1 })
  status: number;

  @OneToMany(type => Channel, channel => channel.group)
  channel: Channel[];
}
