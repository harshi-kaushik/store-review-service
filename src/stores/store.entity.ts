import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Rating } from '../ratings/rating.entity';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ length: 400 })
  address: string;

  @OneToMany(() => Rating, (rating) => rating.store)
  ratings: Rating[];
}
