import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(4, 22)
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(2, 12)
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(2, 36)
  full_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(2, 120)
  bio: string;

  @IsEnum(['USER', 'ADMIN'])
  @IsNotEmpty()
  @IsString()
  role: 'USER' | 'ADMIN';
}
