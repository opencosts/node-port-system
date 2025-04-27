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
const services_1 = require("../../services");
class AuthController {
    constructor() {
        this.store = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const token = yield services_1.AuthService.login(email, password);
            res.status(200).json({ token });
        });
        this.destroy = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            try {
                // const user = await UserService.createUser(name, email, password);
                // const existingUser = await User.findOne({ email });
                // const user = new User({ name, email, password });
                // await user.save();
                res.json({
                    "user": "we"
                });
            }
            catch (error) {
                res.status(500).json({ message: 'Server error', error: (error === null || error === void 0 ? void 0 : error.message) || error });
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=AuthController.js.map