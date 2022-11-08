import { Task } from './../../task/entities/task.entity';
import * as bcrypt from 'bcrypt';
import {
  Column,
  CreateDateColumn,
  Entity,
  // JoinColumn,
  ManyToOne,
  // OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
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
  status: boolean;

  @Column()
  confirmationToken: string;

  @Column({ nullable: false })
  salt: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  // One-to-one Unidirectional relationship
  // @OneToOne(() => Task)
  // @JoinColumn()
  // task: Task;

  // One-to-one Bidirectional relationship
  // @OneToOne(() => Task, (task) => task.user)
  // @JoinColumn()
  // task: Task;

  // Many-to-One relationship
  @ManyToOne(() => Task, (task) => task.users)
  task: Task;

  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
