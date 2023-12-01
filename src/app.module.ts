import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // here at end blog is table name added by us
    MongooseModule.forRoot(
      'mongodb+srv://Paula_Sinha:ClusterBlog1997@cluster0.loisgai.mongodb.net/blog',
    ),
    BlogModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// email: paula.sinha90@gmail.com
// password:ClusterBlog1997
