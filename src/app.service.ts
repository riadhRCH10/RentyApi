import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { userDocument } from './schema/user.schema';
import { checkPhoneDto, loginRequestDto, registerRequestDto } from './Dto/Auth.dto';
import { User } from './models/User.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private userModel: Model<userDocument>
  ){}

  async login(body: loginRequestDto) {
    const { phone_number, password } = body

    const user = await this.userModel.findOne({ phone_number: phone_number }) as User
    console.log(user)

    if (!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);

    if (user.password !== password) throw new HttpException('password incorrect', HttpStatus.FORBIDDEN);

    return user
  }

  async register(body: registerRequestDto) {
    const user = await this.userModel.create(body)
    return user
  }

  async checkPhoneNumber(body: checkPhoneDto) {
      const user = await this.userModel.findOne({ phone_number: body.phone_number })
      if (user) {
        throw new HttpException('Phone number already exists', HttpStatus.NOT_ACCEPTABLE);
      }
      return { message: 'Phone number is valid' }
  }

}
