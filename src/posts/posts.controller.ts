import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@ApiTags('posts')
@ApiBearerAuth('JWT-auth')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, description: 'List of all posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get post by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Post ID' })
  @ApiResponse({ status: 200, description: 'Post found' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({ status: 201, description: 'Post successfully created' })
  @ApiResponse({ status: 400, description: 'Bad request - validation error' })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update post by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Post ID' })
  @ApiResponse({ status: 200, description: 'Post successfully updated' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete post by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Post ID' })
  @ApiResponse({ status: 200, description: 'Post successfully deleted' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
