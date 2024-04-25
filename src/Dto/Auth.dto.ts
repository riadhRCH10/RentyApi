import { ApiProperty } from "@nestjs/swagger";


export class loginRequestDto {
  @ApiProperty()
  phone_number : String

  @ApiProperty()
  password : String
}

  export class registerRequestDto {
    @ApiProperty()
    email: String

    @ApiProperty()
    first_name: String

    @ApiProperty()
    last_name: String

    @ApiProperty()
    password: String

    @ApiProperty()
    phone_number: String
  }

  export class checkPhoneDto {
    @ApiProperty()
    phone_number : String
  }
  



    