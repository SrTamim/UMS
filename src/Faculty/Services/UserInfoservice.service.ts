import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../DTOs/UsreDto.dto';
import { UserInfo } from '../Entitys/UserInfo.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserInfoservice {
  constructor(
    @InjectRepository(UserInfo)
    private UserInfoRepo: Repository<UserInfo>,
  ) {}

  getUserInfo(): any {
    return this.UserInfoRepo.find();
  }

  insertUserInfo(userDto: UserDto): any {
    const userinfo = new UserInfo();
    userinfo.email = userDto.password;
    userinfo.password = userDto.password;
    return this.UserInfoRepo.save(userinfo);
  }

  async signup(userDto: UserDto) {
    const salt = await bcrypt.genSalt();
    const hassedpassed = await bcrypt.hash(userDto.password, salt);
    userDto.password = hassedpassed;
    return this.UserInfoRepo.save(userDto);
  }

  async signin(userDto: UserDto) {
    console.log(userDto.password);
    const mydata = await this.UserInfoRepo.findOneBy({ email: userDto.email });
    const isMatch = await bcrypt.compare(userDto.password, mydata.password);
    if (isMatch) {
      return 1;
    } else {
      return 0;
    }
  }

  updateUserInfo(userDto, id): any {
    return this.UserInfoRepo.update(id, userDto);
  }

  updateAssignmentById(UserInfoRepo, id): any {
    return this.UserInfoRepo.update(id, UserInfoRepo);
  }

  deleteAssignment(id): any {
    return this.UserInfoRepo.delete(id);
  }
}
