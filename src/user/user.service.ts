import { UpdateUserDto } from './dto/update-user.dto';
import { AppGateway } from './../app.gateway';
import { CreateUserDTO } from './dto/create-user.dto';
import {
  Injectable,
  UnprocessableEntityException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private gateway: AppGateway,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ id });
    if (user) {
      return user;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async createUser(createUserData: CreateUserDTO): Promise<UserEntity> {
    const user = await this.userRepository.create({
      ...createUserData,
    });
    await this.userRepository.save(user);
    this.gateway.wss.emit('createdUser', user);
    return user;
  }

  async updateUser(
    id: string,
    updateUserData: UpdateUserDto,
  ): Promise<UserEntity> {
    await this.userRepository.update({ id }, updateUserData);
    const updatedUser = await this.userRepository.findOneBy({ id });
    if (updatedUser) {
      this.gateway.wss.emit('updatedUser', updatedUser);
      return updatedUser;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    const deleteUser = await this.userRepository.delete(id);
    if (!deleteUser.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return deleteUser;
  }
}
