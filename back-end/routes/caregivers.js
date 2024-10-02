const express = require('express');
const router = express.Router();
const Caregiver = require('../models/caregiver');

// GET - Listar todos os cuidadores
router.get('/', async (req, res) => {
  try {
    const caregivers = await Caregiver.find();
    res.json(caregivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET - Buscar cuidador por ID
router.get('/:id', async (req, res) => {
  try {
    const caregiver = await Caregiver.findById(req.params.id);
    if (!caregiver) return res.status(404).json({ message: 'Cuidador não encontrado' });
    res.json(caregiver);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Criar um novo cuidador
router.post('/', async (req, res) => {
  const caregiver = new Caregiver({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    specialty: req.body.specialty,
    location: req.body.location,
    availability: req.body.availability,
  });
  try {
    const newCaregiver = await caregiver.save();
    res.status(201).json(newCaregiver);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT - Atualizar um cuidador
router.put('/:id', async (req, res) => {
  try {
    const caregiver = await Caregiver.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!caregiver) return res.status(404).json({ message: 'Cuidador não encontrado' });
    res.json(caregiver);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE - Deletar um cuidador
router.delete('/:id', async (req, res) => {
  try {
    const caregiver = await Caregiver.findByIdAndDelete(req.params.id);
    if (!caregiver) return res.status(404).json({ message: 'Cuidador não encontrado' });
    res.json({ message: 'Cuidador deletado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
