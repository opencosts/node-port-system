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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class UserRepository {
    constructor() {
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield models_1.User.findById(id);
        });
        this.findByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            return yield models_1.User.findOne({ email });
        });
        this.create = (userData) => __awaiter(this, void 0, void 0, function* () {
            const user = new models_1.User(userData);
            return yield user.save();
        });
        this.update = (user) => __awaiter(this, void 0, void 0, function* () {
            const userObjectId = user._id;
            try {
                const updatedUser = yield models_1.User.findByIdAndUpdate(userObjectId, user, { new: true });
                console.log(updatedUser);
                return updatedUser;
            }
            catch (error) {
                // console.log({ error: error?.message || error });
                return error === null || error === void 0 ? void 0 : error.message;
                throw new Error(error === null || error === void 0 ? void 0 : error.message);
                // if (error.code === 11000) {
                //     const field = Object.keys(error.keyPattern)[0]; // e.g., "email" or "username"
                //     const value = error.keyValue[field];
                //     return (`${field.charAt(0).toUpperCase() + field.slice(1)} "${value}" is already taken`);
                // }
            }
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield models_1.User.findByIdAndDelete(id);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.User.find();
        });
    }
}
exports.default = new UserRepository();
//# sourceMappingURL=UserRepository.js.map