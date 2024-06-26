import express from 'express';
import { pool } from './db.js';

const app = express();

app.get('/pacientes', async (req, res) => {
    const [result]= await pool.query('SELECT * FROM pacientes')
    res.json(result);
});

app.listen(3000, () => {    
    console.log('Servidor escuchando en el puerto 3000');
});