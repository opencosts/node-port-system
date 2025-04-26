import * as dotenv from 'dotenv';

dotenv.config();

export interface IConfig {
    port: string;
    databaseUrl: string,
    databaseName: string,
    jwtSecret: string;
    jwtExpiresIn: string;
    nodeEnv: string;
}

const config: IConfig = {
    port: process.env.PORT || '5000',
    databaseUrl: process.env.DB_URL || 'mongodb://localhost:27017',
    databaseName: process.env.DB_NAME || 'mydatabase',
    jwtSecret: process.env.JWT_SECRET || 'sbdhbt9fnero',
    jwtExpiresIn: process.env.JWT_EXPIRE_IN || '1h',
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
