import express, { Request, Response } from 'express'
import * as path from 'path'

const routerProcessos = express.Router()

routerProcessos.get('/cadastroNovoProcesso', (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname, "../views/paginas/cadastroProcessos.html"))
})

console.log(path.join(__dirname, "../views/paginas/cadastroProcessos.html"))
export default routerProcessos