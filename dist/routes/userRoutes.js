"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routerProcessos = express_1.default.Router();
routerProcessos.get('/testando', function (req, res) {
});
exports.default = routerProcessos;