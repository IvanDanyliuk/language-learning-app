import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return [
      {
        id: 'user_1',
        name: 'John Doe',
        email: 'john.doe@gmail.com',
      },
      {
        id: 'user_2',
        name: 'Jane Doe',
        email: 'jane.doe@gmail.com',
      },
      {
        id: 'user_3',
        name: 'Sam Smith',
        email: 'sam.smith.doe@gmail.com',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
