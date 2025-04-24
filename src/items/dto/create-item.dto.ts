import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsPositive } from 'class-validator';
import { ValidationMessages } from '../../common/constants/validation-messages.constants';

export class CreateItemDto {
    @ApiProperty({
        description: 'Item name',
        example: 'Dell XPS Laptop',
    })
    @IsNotEmpty({ message: ValidationMessages.NOT_EMPTY('name') })
    @IsString({ message: ValidationMessages.IS_STRING('name') })
    name: string;

    @ApiProperty({
        description: 'Item description',
        example: 'Laptop with i7 processor, 16GB RAM and 512GB SSD',
    })
    @IsNotEmpty({ message: ValidationMessages.NOT_EMPTY('description') })
    @IsString({ message: ValidationMessages.IS_STRING('description') })
    description: string;

    @ApiProperty({
        description: 'Item image URL',
        example: 'https://example.com/laptop-image.jpg',
    })
    @IsNotEmpty({ message: ValidationMessages.NOT_EMPTY('image') })
    @IsString({ message: ValidationMessages.IS_STRING('image') })
    image: string;

    @ApiProperty({
        description: 'ID of the author/creator of the item',
        example: 1,
    })
    @IsNotEmpty({ message: ValidationMessages.NOT_EMPTY('authorId') })
    @IsInt({ message: ValidationMessages.IS_INT('authorId') })
    @IsPositive({ message: ValidationMessages.IS_POSITIVE('authorId') })
    authorId: number;
}
