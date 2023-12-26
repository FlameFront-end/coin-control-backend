import { IsNotEmpty, IsOptional } from 'class-validator'
import { UserEntity } from '../../user/entities/user.entity'

export class CreateCategoryDto {
  @IsNotEmpty()
  title: string

  @IsOptional()
  user?: UserEntity
}
