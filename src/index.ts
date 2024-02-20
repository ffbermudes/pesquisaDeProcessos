import express, { Request, Response } from 'express'
import * as path from 'path'
import * as fs from 'fs'
import RouterProcessos from './Routes/processosRouter'
import cors from 'cors'

const porta: number = 8087
const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req:Request, res:Response)=>{
    const pagina: string = "home"
    console.log(`Pag -> ${pagina} Page View`)
    res.sendFile(path.join(__dirname, '../paginas/home.html'))
})

app.use('/processos', RouterProcessos)

app.listen(porta, () => console.log('Porta -> ' + porta))