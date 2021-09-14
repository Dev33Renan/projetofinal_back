const express = require('express')
const cors = require('cors')
const db = require('./conn')
const app = express ()
const routers = require('./routers/routers')


let corsoption = {origin:'http://localhost:3000'} 
app.use (cors(corsoption))
app.use (express.json())
app.use (express.urlencoded({extended:true}))
db(console.error('Erro de conexão'))
app.get ("/", (req , res) => {
    res.send('Rodando');
} ) 

app.use ('/api', routers)

const PORT = 4000

app.listen(PORT, () => console.log(`Servidor Rodando em http://localhost:${PORT}`) )