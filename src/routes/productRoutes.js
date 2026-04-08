import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/', (req, res) => {
    const getProdutos = db.prepare('SELECT * FROM produtos').all()
    res.json(getProdutos)
})

export default router