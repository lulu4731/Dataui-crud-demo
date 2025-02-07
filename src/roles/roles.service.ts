import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import {
  FilterOperator,
  FilterSuffix,
  paginate,
  PaginateQuery,
} from 'nestjs-paginate';
import { FindAllPaginationConfig } from './pagination/pagination-config';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService extends TypeOrmCrudService<Role> {
  constructor(
    @InjectRepository(Role)
    repo: Repository<Role>,
  ) {
    super(repo);
  }

  // async create(createRoleDto: CreateRoleDto) {
  //   console.log(createRoleDto);
  //   const role = new Role();
  //   role.name = createRoleDto.name;
  //   role.createdAt = new Date();
  //   await this.rolesRepository.save(role);
  // }

  // findAll(query: PaginateQuery) {
  //   return paginate(query, this.rolesRepository, FindAllPaginationConfig);
  // }

  // findOne(id: number) {
  //   const role = this.rolesRepository.findOneBy({ id });

  //   if (!role) {
  //     throw new NotFoundException();
  //   }

  //   return role;
  // }

  // update(id: number, updateRoleDto: UpdateRoleDto) {
  //   return this.rolesRepository.update(id, updateRoleDto);
  // }

  // remove(id: number) {
  //   return this.rolesRepository.delete(id);
  // }
}
