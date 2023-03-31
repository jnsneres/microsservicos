const express = require('express')
const app = express()
const lembretes = {}

const bodyParser = require('body-parser')
app.use(bodyParser.json())
let contador = 0

app.get('/lembretes', (req,res) => {
    res.send(lembretes)
})

app.post('/lembretes', (req,res) => {
    contador++;
    const { texto } = req.body
    lembretes[contador] = {
        contador, texto
    }
    res.status(201).send(lembretes[contador])
})

app.listen(4000, () => {
    console.log("Lembretes. Porta 4000")
})