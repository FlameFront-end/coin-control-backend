import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { UserEntity } from '../../user/entities/user.entity'
import { CategoryEntity } from '../../category/entities/category.entity'

@Entity('transaction')
export class TransactionEntity {
  @PrimaryGeneratedColumn({ name: 'transaction_id' })
  id: number

  @Column()
  title: string

  @Column({ nullable: true })
  type: string

  @Column()
  amount: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => UserEntity, (user) => user.transactions)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity

  @ManyToOne(() => CategoryEntity, (category) => category.transactions)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity
}
