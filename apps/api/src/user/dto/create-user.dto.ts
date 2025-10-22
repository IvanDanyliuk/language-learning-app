import { isString, isEmail, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  //URL or image (blob)
  //Could be optional
  @IsString()
  photo: string;

}