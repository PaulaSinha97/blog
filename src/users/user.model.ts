import * as mongoose from 'mongoose';

export const UserRegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: [String],
});

export interface UserRegisterInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string[];
}
