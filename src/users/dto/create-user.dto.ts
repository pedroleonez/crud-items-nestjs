import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'John Doe',
  })
  @IsNotEmpty({ message: 'The name field must not be empty' })
  @IsString({ message: 'The name field must be a string' })
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'johndoe@test.com',
  })
  @IsNotEmpty({ message: 'The email field must not be empty' })
  @IsString({ message: 'The email field must be a string' })
  @IsEmail({}, { message: 'The email field must be a valid email address' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'securePassword123',
    minLength: 6,
  })
  @IsNotEmpty({ message: 'The password field must not be empty' })
  @IsString({ message: 'The password field must be a string' })
  @MinLength(6, { message: 'The password field must be at least 6 characters long' })
  password: string;
}
