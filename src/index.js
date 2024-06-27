import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(json());
app.disable('x-powered-by');

app.get('/pacientes', async (req, res) => {
    res.json({ message: 'Pacientes' });
});

app.listen(3000, () => {    
    console.log('Servidor escuchando en el puerto 3000');
});