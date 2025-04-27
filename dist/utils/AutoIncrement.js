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
exports.default = setAutoIncrementId;
const models_1 = require("../models");
function setAutoIncrementId(model, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
        if (model.isNew && typeof model.id === 'undefined') {
            const counter = yield models_1.Counter.findOneAndUpdate({ _id: identifier }, { $inc: { seq: 1 } }, { new: true, upsert: true }).exec();
            model.id = counter === null || counter === void 0 ? void 0 : counter.seq;
        }
    });
}
//# sourceMappingURL=AutoIncrement.js.map