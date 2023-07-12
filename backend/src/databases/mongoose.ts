import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    const uri = process.env.MONGODB_URI!;

    await mongoose.connect(uri);

    console.log('Database connected successfully');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  try {
    await mongoose.disconnect();

    console.log('Database disconnected');
  } catch (error) {
    console.error(error);
  }
};
