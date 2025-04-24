import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator';
import { ValidationMessages } from '../../common/constants/validation-messages.constants';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  @IsNotEmpty({ message: ValidationMessages.NOT_EMPTY('name') })
  @IsString({ message: ValidationMessages.IS_STRING('name') })
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'johndoe@test.com',
  })
  @IsNotEmpty({ message: ValidationMessages.NOT_EMPTY('email') })
  @IsString({ message: ValidationMessages.IS_STRING('email') })
  @IsEmail({}, { message: ValidationMessages.IS_EMAIL('email') })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'securePassword123',
    minLength: 6,
  })
  @IsNotEmpty({ message: ValidationMessages.NOT_EMPTY('password') })
  @IsString({ message: ValidationMessages.IS_STRING('password') })
  @MinLength(6, { message: ValidationMessages.MIN_LENGTH('password', 6) })
  password: string;
}
