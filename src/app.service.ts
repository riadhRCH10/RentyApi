import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { userDocument } from './schema/user.schema';
import { checkPhoneDto, loginRequestDto, registerRequestDto } from './Dto/Auth.dto';
import { User, userType } from './models/User.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private userModel: Model<userDocument>,
    private jwtService: JwtService
  ){}

  async login(body: loginRequestDto) {
    const { phone_number, password } = body

    const user = await this.userModel.findOne({ phone_number: phone_number }) as User

    if (!user) throw new HttpException('user not found', HttpStatus.NOT_FOUND);

    if (user.password !== password) throw new HttpException('password incorrect', HttpStatus.FORBIDDEN);

    const responce = {
      token: {
        token: this.jwtService.sign({ id: user._id, username: `${user.first_name} ${user.last_name}` }),
        type: 'JWT'
      },
      user_type: user.user_type,
      username: `${user.first_name} ${user.last_name}`
    }
    console.log(responce)
    return responce
  }

  async register(body: registerRequestDto) {
    const user = await this.userModel.create({...body, user_type: userType.USER})
    if (!user) throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
    return { status: 200, message: 'registered successfuly' }

  }

  async checkPhoneNumber(body: checkPhoneDto) {
      const user = await this.userModel.findOne({ phone_number: body.phone_number })
      if (user) {
        throw new HttpException('Phone number already exists', HttpStatus.NOT_ACCEPTABLE);
      }
      return  { status: 200, message: 'Phone number is valid'  }
  }

}
