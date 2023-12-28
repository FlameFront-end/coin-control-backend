import { CategoryEntity } from '../../category/entities/category.entity'
import { UserEntity } from '../../user/entities/user.entity'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateTransactionDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  @IsNumber()
  amount: number

  @IsString()
  type: 'expense' | 'income'

  category: CategoryEntity

  user: UserEntity
}
