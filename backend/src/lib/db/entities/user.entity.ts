import { Entity,Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  phoneNo: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;
}

