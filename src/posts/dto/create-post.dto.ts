import {
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'Post title',
    example: 'My First Blog Post',
    minLength: 3,
    maxLength: 200,
  })
  @IsString({ message: 'Title must be a string' })
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  @MaxLength(200, { message: 'Title must not exceed 200 characters' })
  title: string;

  @ApiProperty({
    description: 'Post content',
    example: 'This is the content of my blog post...',
    minLength: 10,
    maxLength: 5000,
  })
  @IsString({ message: 'Content must be a string' })
  @MinLength(10, { message: 'Content must be at least 10 characters long' })
  @MaxLength(5000, { message: 'Content must not exceed 5000 characters' })
  content: string;

  @ApiPropertyOptional({
    description: 'Author ID',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'AuthorId must be an integer' })
  authorId?: number;
}
