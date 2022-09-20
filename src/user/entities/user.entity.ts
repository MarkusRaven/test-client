import { AbstractEntity } from './../../database/abstract.entity';
import { Entity, Column } from 'typeorm';

export enum UserGender {
  MALE = 'Мужской',
  FEMALE = 'Женский',
}

@Entity('user')
export class UserEntity extends AbstractEntity {
  @Column()
  name: string;

  @Column({ type: 'enum', enum: UserGender })
  gender: UserGender;

  @Column()
  email: string;

  @Column()
  age: number;
}
