import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Body } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { checkPhoneDto, loginRequestDto, registerRequestDto } from './Dto/Auth.dto';

@Controller("auth")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/login")
  @ApiOperation({ summary: 'login' })
	@ApiResponse({ status: 200, description: ' logged successfuly' })
  login( @Body() body: loginRequestDto ) {
    return this.appService.login(body)
  }

  @Post("/register")
  @ApiOperation({ summary: 'register' })
	@ApiResponse({ status: 200, description: ' registred successfuly' })
  register( @Body() body: registerRequestDto ) {
    return this.appService.register(body)
  }

  @Post("/check_phone_number")
  @ApiOperation({ summary: 'check_phone_number' })
	@ApiResponse({ status: 200, description: ' check_phone_number successfuly' })
  checkPhoneNumber( @Body() body: checkPhoneDto ) {
    return this.appService.checkPhoneNumber(body)
  }

  


  /*@Get("/crypto")
  @ApiOperation({ summary: 'Get All Crypto Data.' })
	@ApiResponse({ status: 200, description: ' All Crypto Data' })
  getCrypto() {
    return this.appService.getCrypto();
  }

  @Post("/crypto")
  @ApiOperation({ summary: 'Submit Crypto Data' })
  submitCrypto(
    @Body() Body: CryptoDataDto
  ) {
    return this.appService.postCrypto(Body);
  }

  @Delete("/crypto")
  @ApiOperation({ summary: 'Delete All Crypto Data.' })
  deleteCrypto() {
    return this.appService.deleteCrypto()
  }

  @Get()
  getHello() {
    return this.appService.getHello()
  }*/
}
