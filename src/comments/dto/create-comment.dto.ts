import { IsString, MinLength, MaxLength, IsOptional, IsInt } from 'class-validator';

export class CreateCommentDto {
  @IsString({ message: 'Content must be a string' })
  @MinLength(1, { message: 'Content must be at least 1 character long' })
  @MaxLength(1000, { message: 'Content must not exceed 1000 characters' })
  content: string;

  @IsOptional()
  @IsInt({ message: 'PostId must be an integer' })
  postId?: number;

  @IsOptional()
  @IsInt({ message: 'AuthorId must be an integer' })
  authorId?: number;
}
