import { model, Schema, Types } from 'mongoose';

export interface IAccount {
  _id: Types.ObjectId;
  type: string;
  email: string;
  phone: string;
  name: string;
  avatar: string;
}

const AccountSchema = new Schema<IAccount>({
  type: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, default: '' },
  avatar: { type: String },
});

AccountSchema.index({ type: 1, email: 1 });

export const Account = model('Account', AccountSchema, 'accounts');