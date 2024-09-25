import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginatedSwaggerDocs, PaginateQuery } from 'nestjs-paginate';
import { Role } from './entities/role.entity';
import { FindAllPaginationConfig } from './pagination/pagination-config';
import { Roles } from '../iam/authorization/decorators/decorators.decorator';
import {
  CreateManyDto,
  Crud,
  CrudController,
  CrudRequest,
  CrudService,
  GetManyDefaultResponse,
  Override,
} from '@dataui/crud';

@ApiTags('roles')
@Crud({
  model: {
    type: Role,
  },
  query: {
    maxLimit: 100,
    alwaysPaginate: true,
    join: {
      users: {
        eager: true,
      },
    },
  },
  
})
@Controller('roles')
export class RolesController implements CrudController<Role> {
  constructor(public service: RolesService) {}

  // @Override('getManyBase')
  // getMany(
  //   req: CrudRequest,
  // ): Promise<GetManyDefaultResponse<Role> | Role[]> {
  //   console.log('getManyBase', 'hahahaha');
  //   return null;
  // }
  // @Post()
  // create(@Body() createRoleDto: CreateRoleDto) {
  //   console.log('createRoleDto', createRoleDto);

  //   // return this.rolesService.create(createRoleDto);
  // }

  // @Roles('Admin')
  // @ApiOperation({ summary: 'Retrieve multiple roles' })
  // @PaginatedSwaggerDocs(Role, FindAllPaginationConfig)
  // @Get()
  // findAll(@Query() query: PaginateQuery) {
  //   return this.rolesService.findAll(query);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.rolesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
  //   return this.rolesService.update(+id, updateRoleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.rolesService.remove(+id);
  // }
}
