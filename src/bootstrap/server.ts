
import app from './app';
import { config, connectDB } from '../config';

const PORT = config.port;

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});