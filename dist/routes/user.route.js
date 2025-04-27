"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const user_routes = (0, express_1.Router)();
user_routes.get('/', controllers_1.UserController.index);
user_routes.post('/', controllers_1.UserController.store);
user_routes.get('/:id', controllers_1.UserController.show);
user_routes.put('/:id', controllers_1.UserController.update);
user_routes.delete('/:id', controllers_1.UserController.destroy);
exports.default = user_routes;
//# sourceMappingURL=user.route.js.map