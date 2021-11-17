const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const covidSchema = new Schema({
    dataNotificacao:{
        type: String,
        required: true
    },
    dataPrimeirosSintomas: {
        type: String,
        required: false
    },
    dataTeste: {
        type: String,
        required: false
    },
    dataObito: {
        type: String,
        required: false
    },
    dataNascimento: {
        type: String,
        required: false
    },

    faixaEtaria: {
        type: String,
        required: false
    },
    etnia: {
        type: String,
        required: false
    },
    bairro: {        
        type: String,
        required: false
    },
    cidade: {        
        type: String,
        required: false
    },
    centroDeSaude: {        
        type: String,
        required: false
    },
    tipoTeste: {        
        type: String,
        required: false
    },
    genero: {        
        type: String,
        required: false
    },
    dispineia: {
        type: Boolean,
        required: false
    },
    febre: {
        type: Boolean,
        required: false
    },
    tosse: {
        type: Boolean,
        required: false
    },
    uti: {
        type: Boolean,
        required: false
    },
    dorGarganta: {
        type: Boolean,
        required: false        
    }
},{
    timestamps: true
});

var Casos = mongoose.model('caso', covidSchema);

module.exports = Casos;