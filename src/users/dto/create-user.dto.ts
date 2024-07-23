import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'test123@mail.com' })
  email: string;

  @ApiProperty({ default: 'UserName' })
  fullName: string;

  @ApiProperty({ default: '123123123' })
  password: string;
}
