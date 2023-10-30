import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('/posts')
  create(@Body() body: CreateBlogDto) {
    console.log('body', body.title, body.tags);
    return this.blogService.create(body.title, body.tags);
  }

  @Get('')
  findAll() {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOneBlog(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: { title: string }) {
    console.log('controller param', id, updateBlogDto);
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(id);
  }
}
