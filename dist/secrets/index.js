"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicKey = exports.privateKey = void 0;
const fs_1 = __importDefault(require("fs"));
// export const privateKey: string = fs.readFileSync('./private.key', 'utf8');
// export const publicKey: string = fs.readFileSync('./public.key', 'utf8');
const path_1 = __importDefault(require("path"));
exports.privateKey = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../secrets/private.key'), 'utf8');
exports.publicKey = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../secrets/public.key'), 'utf8');
//# sourceMappingURL=index.js.map