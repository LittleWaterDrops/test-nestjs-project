import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: Array<User> = [];
  private id = 0;

  create(createUserDto: CreateUserDto) {
    this.users.push({ id: ++this.id, ...createUserDto, createdAt: new Date() });
  }

  findAll() {
    return [...this.users];
  }

  findOne(id: number) {
    const findOne = this.users.find((user) => user.id === id);
    if (!findOne) {
      throw new NotFoundException();
    }
    return findOne;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const findOne = this.findOne(id);
    this.remove(id);
    this.users.push({ ...findOne, ...updateUserDto, updatedAt: new Date() });
  }

  remove(id: number) {
    this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
  }
}
