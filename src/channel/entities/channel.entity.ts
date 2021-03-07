import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity('home_prod') // 'egp' - default // 'playlist' - support data
export class Channel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  channel_id: number;

  @Column()
  channel_name_id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  lang: string;

  @Column({ nullable: true })
  group: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ nullable: true })
  rec: number;

  @Column({ nullable: true })
  raw: string;

  @Column({ default: 100 })
  sort: number;

  @Column({ default: 1 })
  status: number;

  @ManyToOne(type => Category, category => category.name, { eager: false })
  @JoinColumn()
  category: Category;

  counter: number;
}
