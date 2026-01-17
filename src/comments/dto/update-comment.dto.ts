import { IsString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class UpdateCommentDto {
  @IsOptional()
  @IsString({ message: 'Content must be a string' })
  @MinLength(1, { message: 'Content must be at least 1 character long' })
  @MaxLength(1000, { message: 'Content must not exceed 1000 characters' })
  content?: string;
}
