import express, { Request, Response } from 'express'
import * as path from 'path'
import ProcessoController from '../Controllers/processoController'
import { Processo } from '../Interfaces/allInterfaces'

const routerProcessos = express.Router()

routerProcessos.get('/cadastroNovoProcesso', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../paginas/cadastroProcessos.html"))
})

routerProcessos.post('/verificarCadastroDoProcesso', (req: Request, res: Response) => {

    const {nprocesso, cliente, alvoProcesso, zuluDate, status}: Processo = req.body

    const objtProcesso: Processo = {
        nprocesso,
        cliente,
        alvoProcesso,
        zuluDate,
        status
    }

    const expectedKeys = ['nprocesso', 'cliente', 'alvoProcesso', 'zuluDate'];
    const receivedKeys = Object.keys(req.body);
    const allKeysValid = expectedKeys.every(key => receivedKeys.includes(key) && req.body[key] !== undefined);

    if (!allKeysValid) {
        return res.status(400).send('Faltam chaves necessárias ou chaves estão indefinidas.');
    }

    const controllerProcessos: ProcessoController = new ProcessoController(objtProcesso)

    res.json(controllerProcessos)
})

export default routerProcessos