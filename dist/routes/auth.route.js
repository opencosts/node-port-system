"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes = (0, express_1.Router)();
const controllers_1 = require("../controllers");
auth_routes.post('/login', controllers_1.AuthController.store);
auth_routes.post('/logout', controllers_1.AuthController.destroy);
exports.default = auth_routes;
//# sourceMappingURL=auth.route.js.map