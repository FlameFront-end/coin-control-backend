import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { UserEntity } from '../../user/entities/user.entity'
import { TransactionEntity } from '../../transaction/entities/transaction.entity'

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn({ name: 'category_id' })
  id: number

  @Column()
  title: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => UserEntity, (user) => user.categories)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity

  @OneToMany(() => TransactionEntity, (transactions) => transactions.category)
  transactions: TransactionEntity[]
}
