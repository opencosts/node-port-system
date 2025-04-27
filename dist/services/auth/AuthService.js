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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const secrets_1 = require("../../secrets");
class AuthService {
    constructor() {
        this.login = (email, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield models_1.User.findOne({ email: email, status: "Enable" });
                // const user = await UserRepository.findByEmail(email);
                if (!user) {
                    throw new Error('Invalid email or password');
                }
                const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
                if (!isPasswordValid) {
                    throw new Error('Invalid email or password');
                }
                const cleanUser = (0, utils_1.sanitizeUser)(user);
                const signOptions = { algorithm: 'RS256', expiresIn: '1h' };
                const token = jsonwebtoken_1.default.sign({ cleanUser }, secrets_1.privateKey, signOptions);
                // const token = jwt.sign({ cleanUser }, config.jwtSecret, { algorithm: 'HS256', expiresIn: '1h' });
                return token;
            }
            catch (error) {
                throw new Error(error === null || error === void 0 ? void 0 : error.message);
            }
        });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=AuthService.js.map