"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var ProcessoController = /** @class */ (function () {
    function ProcessoController() {
    }
    ProcessoController.cadastrarProcesso = function (req, res) {
        var _a = req.body, nprocesso = _a.nprocesso, cliente = _a.cliente, alvoProcesso = _a.alvoProcesso;
        var variaveisDaRequisicao = { cliente: cliente, alvoProcesso: alvoProcesso };
        var objetoDB = {};
        var data = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../../db/data.json'), { encoding: 'utf8' }));
        Object.defineProperty(objetoDB, nprocesso, {
            value: variaveisDaRequisicao,
            writable: true,
            enumerable: true,
            configurable: true
        });
        Object.assign(data, objetoDB);
        var dadosJson = JSON.stringify(data, null, 2);
        fs_1.default.writeFile(path_1.default.join(__dirname, '../../db/data.json'), dadosJson, function (err) {
            if (err)
                console.error(err);
            else
                console.log('Adicionado ao json');
        });
        res.redirect('/');
    };
    ProcessoController.getProcessos = function (req, res) {
        var data = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../../db/data.json'), { encoding: 'utf8' }));
        res.json(data);
    };
    return ProcessoController;
}());
exports.default = ProcessoController;
