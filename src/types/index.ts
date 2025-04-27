import { AuthInterface } from "../interfaces/AuthInterface";


declare global {
    namespace Express {
        interface Request {
            loggedUser?: AuthInterface;
        }
    }
} 