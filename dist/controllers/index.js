"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.AuthController = void 0;
// export * as PostController from "./PostController"
var AuthController_1 = require("./auth/AuthController");
Object.defineProperty(exports, "AuthController", { enumerable: true, get: function () { return __importDefault(AuthController_1).default; } });
var UserController_1 = require("./auth/UserController");
Object.defineProperty(exports, "UserController", { enumerable: true, get: function () { return __importDefault(UserController_1).default; } });
//# sourceMappingURL=index.js.map