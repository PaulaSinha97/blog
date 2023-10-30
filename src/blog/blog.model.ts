import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  tags: [{type: String}],
  // comments: [{ type: { text: String, author: String } }],
});

export interface BlogInterface {
  id: string;
  title: string;
  tags: string[];
  // comments: { text: string; author: string }[];
}
