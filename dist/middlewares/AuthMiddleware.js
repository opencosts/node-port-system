"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secrets_1 = require("../secrets");
const models_1 = require("../models");
class AuthMiddleware {
    constructor() {
        this.Auth = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
            if (!token) {
                return res.status(401).json({ message: 'Access Denied. No Token Provided.' });
            }
            try {
                const decoded = yield new Promise((resolve, reject) => {
                    jsonwebtoken_1.default.verify(token, secrets_1.publicKey, (err, decoded) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve(decoded);
                    });
                });
                const userId = decoded.id; // Extract user ID from decoded token
                // Fetch the user from the database
                const user = yield models_1.User.findById(userId).exec();
                if (!user) {
                    return res.status(401).json({ message: 'User  not found.' });
                }
                req.user = user.toObject();
                next(); // Continue to the next middleware/route handler
                // jwt.verify(token, publicKey, (err, decoded) => {
                //     if (err) {
                //         return res.status(401).json({ message: 'Invalid or expired token.' });
                //     }
                //     const userId = (decoded as { id: string }).id; // Adjust based on your token structure
                //     const user = await User.findById(userId);
                //     if (!user) {
                //         return res.status(401).json({ message: 'User  not found.' });
                //     }
                //     req.user = user;
                //     next();
                // });
            }
            catch (error) {
                // console.log(error);
                res.status(500).json({ message: 'Server Error' });
            }
        });
    }
}
exports.default = new AuthMiddleware();
//# sourceMappingURL=AuthMiddleware.js.map