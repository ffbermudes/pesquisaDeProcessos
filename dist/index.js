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
var fs = __importStar(require("fs"));
var porta = 8087;
var app = (0, express_1.default)();
app.use(express_1.default.static(path.join(__dirname, '../public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/teste', function (req, res) {
    var pagina = "home";
    console.log("Pag -> ".concat(pagina, " Page View"));
    res.sendFile(path.join(__dirname, '../views/home.html'));
});
var data = fs.readFileSync('./db/data.json', 'utf8');
var obj = JSON.parse(data);
if ("Filipe Freitas Bermudes" in obj) {
    var processos = obj["Filipe Freitas Bermudes"]['processos'];
    var processo1 = processos[0], processo2 = processos[1];
    console.log(processo1);
    // console.log(dados)
}
app.listen(porta, function () { return console.log('Porta -> ' + porta); });
