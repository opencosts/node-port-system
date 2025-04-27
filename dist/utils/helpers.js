"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimInput = exports.validateEmail = exports.sanitizeUser = void 0;
const sanitizeUser = (user) => {
    return { id: user === null || user === void 0 ? void 0 : user._id, name: user === null || user === void 0 ? void 0 : user.name, email: user === null || user === void 0 ? void 0 : user.email };
};
exports.sanitizeUser = sanitizeUser;
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
exports.validateEmail = validateEmail;
const trimInput = (input) => {
    return input.trim();
};
exports.trimInput = trimInput;
//# sourceMappingURL=helpers.js.map