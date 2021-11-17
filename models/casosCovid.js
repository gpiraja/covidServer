const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const covidSchema = new Schema({
    dataPrimeirosSintomas: {
        type: Date,
        required: false
    },
    dataTeste: {
        type: Date,
        required: false
    },
    dataNascimento: {
        type: Date,
        required: false
    },
    dataObito: {
        type: Date,
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
    tipoDeTeste: {        
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

var Casos = mongoose.model('caso', dishSchema);

module.exports = Casos;