import express from 'express'

export const router = express.Router()

router.post('/items', (req, res) => {
  res.send('Cria novo item')
})

router.get('/items', (req, res) => {
  res.send('Lê todos os itens')
})

router.get('/items/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Lê o item ${id}`)
  // res.json(item)
})

router.put('/items/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Atualiza o item ${id}`)
})

router.delete('/items/:id', (req, res) => {
  const id: number = +req.params.id
  res.send(`Apaga o item ${id}`)
})