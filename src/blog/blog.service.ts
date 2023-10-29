import { Injectable } from '@nestjs/common';
// import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogInterface } from './blog.model';
@Injectable()
export class BlogService {
  // Same name defined in blog modules
  constructor(
    @InjectModel('Blogg') private readonly blogModel: Model<BlogInterface>,
  ) {}

  async create(title, tags) {
    const newBlog = new this.blogModel({
      title,
      tags,
    });
    const res = await newBlog.save();
    console.log('res', res);
    return 'blog created';
  }

  findAll() {
    return `This action returns all blog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
