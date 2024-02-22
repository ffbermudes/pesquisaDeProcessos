"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = __importStar(require("path"));
var processoController_1 = __importDefault(require("../Controllers/processoController"));
var routerProcessos = express_1.default.Router();
routerProcessos.get('/cadastroNovoProcesso', function (req, res) {
    res.sendFile(path.join(__dirname, "../../paginas/cadastroProcessos.html"));
});
routerProcessos.post('/verificarCadastroDoProcesso', function (req, res) { return processoController_1.default.cadastrarProcesso(req, res); });
routerProcessos.get('/getProcessos', function (req, res) { return processoController_1.default.getProcessos(req, res); });
routerProcessos.delete('/deleteProcessos', function (req, res) { return processoController_1.default.deleteProcesso(req, res); });
exports.default = routerProcessos;
