import mongoose from 'mongoose';

export async function mongoConnect() {
  await mongoose.connect(process.env.MONGO_URL, {
    // authSource: 'admin',
    autoIndex: false,
    directConnection: true,
  });
}
