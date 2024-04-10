import express, { Request, Response } from 'express'
import RouterProcessos from './routes/processosRouter.js'
import cors from 'cors'
import path from 'path';

const porta: number = 8087
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'));

app.set('views', path.join(__dirname, "..\\src\\views"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/cadastro', (req, res) => {
    res.render('pages/cadProcess');
});

app.use('/processos', RouterProcessos)

app.listen(porta, () => console.log('Porta -> ' + porta))