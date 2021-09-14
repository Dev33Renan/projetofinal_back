const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tarefas = new Schema ({

    titulo= {type: String, required: true},
    descricao= {type: String, required: true},
    prioridade= {type: String, required: true},
    status={type: String, required: true},
    prazo={type: String, required:true},
    datadecriacao={type:Date, required:true},

})

model.exports = mongoose.model ('tarefas', Tarefas)