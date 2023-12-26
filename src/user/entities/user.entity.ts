import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { CategoryEntity } from '../../category/entities/category.entity'
import { TransactionEntity } from '../../transaction/entities/transaction.entity'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => CategoryEntity, (category) => category.user, {
    onDelete: 'CASCADE'
  })
  categories: CategoryEntity[]

  @OneToMany(() => TransactionEntity, (transaction) => transaction.user, {
    onDelete: 'CASCADE'
  })
  transactions: TransactionEntity[]
}
