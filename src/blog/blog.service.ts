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
    // Blogg is collection name
    @InjectModel('Blogg') private readonly blogModel: Model<BlogInterface>,
  ) {}

  async create(title: string, tags: string) {
    const newBlog = new this.blogModel({
      title,
    });

    newBlog.tags.push(tags);
    const res = await newBlog.save();
    console.log('res', res);
    return { id: res.id };
  }

  async findAll() {
    const allBlogs = await this.blogModel.find().exec();
    console.log('allblogs', allBlogs);
    return allBlogs;
  }

  async findOne(id: string) {
    const doc = await this.blogModel.findById(id);
    return doc;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
