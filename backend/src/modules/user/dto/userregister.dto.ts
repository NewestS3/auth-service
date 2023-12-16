import { IsString, IsEmail, IsPhoneNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  phoneNo: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsString()
  address: string;
}
