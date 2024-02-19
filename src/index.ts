import express, { Request, Response } from 'express'
import * as path from 'path'
import * as fs from 'fs'
import RouterProcessos from './Routes/processosRouter'


const porta: number = 8087

const app = express()
app.use('/processos', RouterProcessos)


app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req:Request, res:Response)=>{

    const pagina: string = "home"
    console.log(`Pag -> ${pagina} Page View`)
    res.sendFile(path.join(__dirname, '../views/paginas/home.html'))
})

app.listen(porta, () => console.log('Porta -> ' + porta))