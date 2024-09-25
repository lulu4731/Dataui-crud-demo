import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ManyToOne(() => Role, (role) => role.users)
  // @JoinColumn({ name: 'id' })
  role: Role;
}
