import { Router } from "express";

export const router = Router();

router.get('/pacientes', async (req, res) => {
    res.send('Listado de pacientes');
});

router.get('/paciente/:id', async (req, res) => {
    res.send('Busqueda de paciente por id');
});

router.post('/paciente', async (req, res) => {
    res.send('Crear paciente');
});

router.put('/paciente/:id', async (req, res) => {
    res.send('actualizar paciente');
});

router.delete('/paciente/:id', async (req, res) => {
    res.send('Eliminar paciente');
});