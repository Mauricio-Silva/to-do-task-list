import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_table')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @Column()
  createAt: Date;

  @Column()
  updateAt: Date;

  @Column()
  auth_code: string;
}
