import { IsString, MinLength, MaxLength, IsOptional, IsInt } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Title must be a string' })
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  @MaxLength(200, { message: 'Title must not exceed 200 characters' })
  title: string;

  @IsString({ message: 'Content must be a string' })
  @MinLength(10, { message: 'Content must be at least 10 characters long' })
  @MaxLength(5000, { message: 'Content must not exceed 5000 characters' })
  content: string;

  @IsOptional()
  @IsInt({ message: 'AuthorId must be an integer' })
  authorId?: number;
}
