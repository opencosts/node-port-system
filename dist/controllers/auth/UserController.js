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
class UserController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield services_1.UserService.getUsers();
                res.json({ users });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Server Error' });
            }
        });
        this.store = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            try {
                const user = yield services_1.UserService.createUser(name, email, password);
                // const existingUser = await User.findOne({ email });
                // const user = new User({ name, email, password });
                // await user.save();
                res.json({
                    user
                });
            }
            catch (error) {
                res.status(500).json({ message: 'Server error', error: (error === null || error === void 0 ? void 0 : error.message) || error });
            }
        });
        this.show = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield services_1.UserService.getUserById(req.params.id);
            res.json({
                user
            });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email, password, status } = req.body;
            try {
                const user = yield services_1.UserService.updateUser(id, name, email, password, status);
                res.json({ user });
            }
            catch (error) {
            }
        });
        this.destroy = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield services_1.UserService.deleteUser(id);
                res.json({ user });
            }
            catch (error) {
            }
        });
    }
}
exports.default = new UserController(); // ✅ export instance
//# sourceMappingURL=UserController.js.map