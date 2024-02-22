import express, { Request, Response } from 'express'
import * as path from 'path'
import ProcessoController from '../Controllers/processoController'

const routerProcessos = express.Router()

routerProcessos.get('/cadastroNovoProcesso', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../paginas/cadastroProcessos.html"))
})

routerProcessos.post('/verificarCadastroDoProcesso', (req: Request, res: Response) => ProcessoController.cadastrarProcesso(req, res))
routerProcessos.get('/getProcessos', (req: Request, res: Response) => ProcessoController.getProcessos(req, res))
routerProcessos.delete('/deleteProcessos', (req: Request, res: Response) => ProcessoController.deleteProcesso(req, res))

export default routerProcessos