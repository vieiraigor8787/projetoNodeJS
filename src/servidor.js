const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req,res,next) => {
    console.log('Midleware 1...')
    next()
})
app.get('/produtos', (req,res,next) => { /*padrão middleware*/
    res.send({nome: 'notebook', preco: 1235.90}) //converte para json automaticamente - metodo send
})

app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}`)
})