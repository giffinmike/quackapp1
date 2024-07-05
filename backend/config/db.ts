import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error('MONGO_URI environment variable is not defined');
    }
    await mongoose.connect(mongoURI, {

    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", (error as Error).message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
