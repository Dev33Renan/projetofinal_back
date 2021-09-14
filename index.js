const express = require('express')
const cors = require('cors')

const app = express ()

app.get ("/", (req , res) => {
    res.send('Rodando');
} ) 

const PORT = 4000

app.listen(PORT, () => console.log(`Servidor Rodando em http://localhost:${PORT}`) )