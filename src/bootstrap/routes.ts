import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use('/api', router); // All routes prefixed with /api

export default app;