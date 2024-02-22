import fs from 'fs'
import path from 'path'
import { Request, Response, json } from 'express'

class ProcessoController {

    static cadastrarProcesso(req: Request, res: Response) {
        const { nprocesso, cliente, alvoProcesso } = req.body
        const variaveisDaRequisicao = { cliente, alvoProcesso, nprocesso }
        const objetoDB = {}

        const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/data.json'), { encoding: 'utf8' }))

        Object.defineProperty(objetoDB, nprocesso, {
            value: variaveisDaRequisicao,
            writable: true,
            enumerable: true,
            configurable: true
        })

        Object.assign(data, objetoDB)

        const dadosJson = JSON.stringify(data, null, 2)

        fs.writeFile(path.join(__dirname, '../../db/data.json'), dadosJson, (err) => {
            if (err)
                console.error(err)
            else
                console.log('Adicionado ao json')
        })

        res.redirect('/')
    }

    static getProcessos(req: Request, res: Response) {
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/data.json'), { encoding: 'utf8' }))

        res.json(data)
    }

    static deleteProcesso(req: Request, res: Response) {
        const processo:number = req.body.processo
        console.log(processo)

        res.end()
    }
}

export default ProcessoController