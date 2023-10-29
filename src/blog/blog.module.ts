import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './blog.model';

@Module({
  // This will allow us to inject this model into any file that needs this model
  // creates model and makes it injectable
  imports: [MongooseModule.forFeature([{ name: 'Blogg', schema: BlogSchema }])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
