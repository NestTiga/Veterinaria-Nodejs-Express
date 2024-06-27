import express, { json } from 'express';
import morgan from 'morgan';
import { router } from './routes/pacientes.route.js';
import { Paciente } from './db.js';

const app = express();

app.use(morgan('dev')); 
app.use(json());
app.disable('x-powered-by');


app.use('/api/v1',router);
// app.get('/pacientes', async (req, res) => {
//     await Paciente.sync();
//     const pacientes = await Paciente.findAll();
//     res.json(pacientes);
// });

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {    
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});