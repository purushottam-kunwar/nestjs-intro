import * as mongoose from 'mongoose';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

export const EmployeesSchema = new mongoose.Schema({
  code: { type: Number, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  address: { type: String, required: true },
  status: { type: Boolean, required: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

export interface Employees extends mongoose.Document {
  code: number;
  fullName: string;
  email: string;
  phoneNumber: number;
  address: string;
  status: boolean;
  username: string;
  password: string;
}
