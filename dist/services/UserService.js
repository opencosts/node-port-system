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
const repositories_1 = require("../repositories");
const models_1 = require("../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserService {
    constructor() {
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            return yield repositories_1.UserRepository.findAll();
        });
        this.createUser = (name, email, password) => __awaiter(this, void 0, void 0, function* () {
            const user = new models_1.User({ name, email, password });
            return yield repositories_1.UserRepository.create(user);
        });
        this.updateUser = (id, name, email, password, status) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield repositories_1.UserRepository.findById(id);
                if (!user)
                    throw new Error('User  not found');
                if (email)
                    user.email = email;
                if (password)
                    user.password = yield bcryptjs_1.default.hash(password, 10);
                if (name)
                    user.name = name;
                if (status)
                    user.status = status;
                return yield repositories_1.UserRepository.update(user);
            }
            catch (error) {
                throw new Error(error === null || error === void 0 ? void 0 : error.message);
            }
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield repositories_1.UserRepository.delete(id);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield repositories_1.UserRepository.findById(id);
        });
    }
}
exports.default = new UserService;
//# sourceMappingURL=UserService.js.map