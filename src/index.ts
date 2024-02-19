import express, { Request, Response } from 'express'
import * as path from 'path'
import * as fs from 'fs'

const porta: number = 8087

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/teste', (req:Request, res:Response)=>{

    const pagina: string = "home"
    console.log(`Pag -> ${pagina} Page View`)
    res.sendFile(path.join(__dirname, '../views/home.html'))
})



const data = fs.readFileSync('./db/data.json', 'utf8');
const obj = JSON.parse(data);
if ("Filipe Freitas Bermudes" in obj){
    const processos = obj["Filipe Freitas Bermudes"]['processos']
    const [processo1, processo2] = processos

    console.log(processo1)
    // console.log(dados)
}


app.listen(porta, () => console.log('Porta -> ' + porta))