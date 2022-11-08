import { Status } from './../enum/task.enum';
import {
  Column,
  Entity,
  OneToMany,
  // OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  status: Status = Status.DO;

  // One-to-one Bidirectional relationship
  // @OneToOne(() => User, (user) => user.task)
  // user: User;

  //One-to-many relationship
  @OneToMany(() => User, (users) => users.task)
  users: User[];
}
