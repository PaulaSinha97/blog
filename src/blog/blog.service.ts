import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOneBlog(id: string) {
    let blog;
    // try catch works in service
    try {
      blog = await this.blogModel.findById(id);
      // this doc has all the mongoose methods
    } catch (err) {
      console.log('error dfdfdsfdsfsdfsdfdsfdf', err);
      throw new NotFoundException('Blog not found');
    }
    if (!blog) {
      throw new NotFoundException('Blog not found');
    }
    return blog;
  }

  async update(id: string, updateBlogDto: { title: string }) {
    try {
      const updatedBlog = await this.findOneBlog(id);
      console.log('updatedBlog', updatedBlog);
      updatedBlog.title = updateBlogDto.title;
      console.log(
        'updateBlogDtoupdatedBlog',
        updatedBlog,
        'param',
        updateBlogDto,
      );
      const newResp = await updatedBlog.save();
      return newResp;
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  }

  async remove(id: string) {
    await this.blogModel.deleteOne({ _id: id });
    return `This action removes a #${id} blog`;
  }
}
