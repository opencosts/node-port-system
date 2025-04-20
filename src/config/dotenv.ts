import * as dotenv from 'dotenv';

dotenv.config();

interface Config {
    port: string;
    databaseUrl: string,
    databaseName: string,
    jwtSecret: string;
    nodeEnv: string;
}

const config: Config = {
    port: process.env.PORT || '5000',
    databaseUrl: process.env.DB_URL || 'mongodb://localhost:27017',
    databaseName: process.env.DB_NAME || 'mydatabase',
    jwtSecret: process.env.JWT_SECRET || '',
    nodeEnv: process.env.NODE_ENV || 'development',
};

export { config };
