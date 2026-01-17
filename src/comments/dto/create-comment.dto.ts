import {
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
  IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Comment content',
    example: 'This is a great post!',
    minLength: 1,
    maxLength: 1000,
  })
  @IsString({ message: 'Content must be a string' })
  @MinLength(1, { message: 'Content must be at least 1 character long' })
  @MaxLength(1000, { message: 'Content must not exceed 1000 characters' })
  content: string;

  @ApiPropertyOptional({
    description: 'Post ID',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'PostId must be an integer' })
  postId?: number;

  @ApiPropertyOptional({
    description: 'Author ID',
    example: 1,
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'AuthorId must be an integer' })
  authorId?: number;
}
