import mongoose from 'mongoose';
import { config } from './dotenv';

const databaseUrl: string = config.databaseUrl;

const databaseName: string = config.databaseName;

export const connectDB = async () => {
    try {
        await mongoose.connect(`${databaseUrl}/${databaseName}`);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB;
