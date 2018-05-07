import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgresql://abias:admin@localhost:5432/imobiliariaDB');


export class bancocontroller{
    constructor(){}

    listar(){
        sequelize.sync().then(function(){
            cliente.findAll().then(function(cliente){
                console.log(cliente[1].dataValues)
            });
        });
    }
}


const cliente = sequelize.define('cliente', {
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    cpfcnpj: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    nome: {
        type: Sequelize.STRING
    },
    numero: {
        type: Sequelize.INTEGER
    },
    orgao: {
        type: Sequelize.STRING
    },
    profissao: {
        type: Sequelize.STRING
    },
    rg: {
        type: Sequelize.STRING
    },
    telefone1: {
        type: Sequelize.STRING
    },
    telefone2: {
        type: Sequelize.STRING
    },
    telefone3: {
        type: Sequelize.STRING
    },
    tipo: {
        type: Sequelize.STRING
    },
    tipo2: {
        type: Sequelize.STRING
    },
    ufcliente: {
        type: Sequelize.STRING
    },
    ufrg: {
        type: Sequelize.STRING
    },
    datanascimento: {
        type: Sequelize.STRING
    }
    
});