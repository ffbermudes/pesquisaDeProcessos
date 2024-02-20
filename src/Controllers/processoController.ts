import { Processo, Status } from '../Interfaces/allInterfaces'
import fs from 'fs/promises';
import fss from 'fs'
import path from 'path'

class ProcessoController implements Processo {

    public nprocesso: number
    public cliente: string
    public alvoProcesso: string
    public zuluDate: string
    public status: Status

    constructor(objProcesso: Processo) {
        this.nprocesso = objProcesso.nprocesso
        this.cliente = objProcesso.cliente
        this.alvoProcesso = objProcesso.alvoProcesso
        this.zuluDate = objProcesso.zuluDate
        this.status = 'ativo'

        this.init()
    }

    private async init(): Promise<void> {
        await this.writeDbJson()
    }

    private async writeDbJson(): Promise<void> {
        try {

            const filePath = path.join(__dirname, '../../db/data.json')

            const data = await fs.readFile(filePath, { "encoding": 'utf-8' })
            const dados = JSON.parse(data)

            if (dados[this.nprocesso] === undefined) {
                // logica para escrever json
            }

        } catch (error) {
            console.error('Erro ao ler o arquivo:', error)
        }

    }

}

export default ProcessoController