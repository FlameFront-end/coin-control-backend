import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import { Repository } from 'typeorm'
import * as argon2 from 'argon2'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email
      }
    })

    if (existUser) {
      throw new BadRequestException('This email already exist')
    }

    return this.userRepository.save({
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password)
    })
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ where: { email: email } })
  }
}
