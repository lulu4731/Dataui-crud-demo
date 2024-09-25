import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
