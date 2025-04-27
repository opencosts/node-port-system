"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const controllers_1 = require("../controllers");
router.get('/', controllers_1.PostController.index);
router.post('/', controllers_1.PostController.store);
router.get('/:id', controllers_1.PostController.show);
router.put('/:id', controllers_1.PostController.update);
router.delete('/:id', controllers_1.PostController.destroy);
exports.default = router;
//# sourceMappingURL=post.route.js.map