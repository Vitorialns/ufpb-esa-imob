const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgresql://abias:admin@localhost:5432/imobiliariaDB');

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

class bancocontroller{
    constructor(){

    }


}


function cadatrar(){
    cliente.create({
        bairro: 'bbbbbb',
cep: 'aaaaa',
cidade: 'aaaaa',
cpfcnpj: 'aaaaa',
email: 'aaaaa',
endereco: 'aaaaa',
nome: 'abias',
numero: 1111,
orgao: 'aaaaa',
profissao: 'aaaaa',
rg: 'aaaaa',
telefone1: 'aaaaa',
telefone2: 'aaaaa',
telefone3: 'aaaaa',
tipo: 'aaaaa',
tipo2: 'aaaaa',
ufcliente: 'aaaaa',
ufrg: 'aaaaa',
datanascimento: 'aaaaa'

    })
}



/*
    // Apaga um cliente usando o id
    //OBS.: precisa colocar ele dentro de um metodo e colocar o parametro
    sequelize.sync().then(function(){
        cliente.destroy({
            where: {
               id: 5 //id do cliente
            }
         }).then(function(rowDeleted){ // confirmacao se foi apagado
           if(rowDeleted === 1){
              console.log('Deleted successfully');
            }
         }, function(err){
             console.log(err);
         });
    })
//Metodo que busca todos os cliente e printa um array deles no console
//OBS.: precisa tirar esse print do log e no lugar por para retornar ma precisa mudar
//o tipo do retorno da funcao que esta void e como nao consigo importar a classe cliente para
//o codigo nao esta cendo possivel.
    function listartodosclientes(){
        sequelize.sync().then(function(){
            cliente.findAll().then(function(cliente){
                console.log(cliente)
            });
        });
    }

    //function editarcliente(clien : Cliente){
       /* cliente.update(
            { nome: 'abias santana'},
            { where: { id: 6 } }
          )
            .then(result =>
              console.log(result)
            )
            .catch(err =>
              console.log(err))
   // }
    // Busca todos os clientes e printa um array dele no log
    sequelize.sync().then(function(){
            cliente.findAll().then(function(cliente){
                console.log(cliente)
            });
        });
    //Atualiza um cliente pelo id
    //OBS.: precisa por dentro de um metodo, receber um cliente nele
    cliente.update(
        { nome: 'mimimimi' },
        { where: { id: 6 } }
      )
        .then(result =>
          console.log(result)
        )
        .catch(err =>
          console.log(err)
        )

    /*
    sequelize.sync().then(function(){
        cliente.findOne({
            where: {id: 6},
        });
        console.log(cliente);
    });

// metodo igual ao que esta abaixo so que realmente dentro de um metodo
///OBS.: precisa impostar um cliente para poder receber um como parametro nesta funcao




// cria um cliente estatico
    sequelize.sync().then(function(){
        cliente.create({
            bairro: 'aaaaa',
    cep: 'aaaaa',
    cidade: 'aaaaa',
    cpfcnpj: 'aaaaa',
    email: 'aaaaa',
    endereco: 'aaaaa',
    nome: 'abias',
    numero: 1111,
    orgao: 'aaaaa',
    profissao: 'aaaaa',
    rg: 'aaaaa',
    telefone1: 'aaaaa',
    telefone2: 'aaaaa',
    telefone3: 'aaaaa',
    tipo: 'aaaaa',
    tipo2: 'aaaaa',
    ufcliente: 'aaaaa',
    ufrg: 'aaaaa',
    datanascimento: 'aaaaa'

        })
    });

/*
cliente.create({
    bairro: 'aaaaa',
    cep: 'aaaaa',
    cidade: 'aaaaa',
    cpfcnpj: 'aaaaa',
    email: 'aaaaa',
    endereco: 'aaaaa',
    nome: 'abias',
    numero: 1111,
    orgao: 'aaaaa',
    profissao: 'aaaaa',
    rg: 'aaaaa',
    telefone1: 'aaaaa',
    telefone2: 'aaaaa',
    telefone3: 'aaaaa',
    tipo: 'aaaaa',
    tipo2: 'aaaaa',
    ufcliente: 'aaaaa',
    ufrg: 'aaaaa',
    datanascimento: 'aaaaa'

});




//Busca todos os clientes de printa um array de clientes no log
cliente.findAll().then(cliente => {
    console.log(cliente)
  })





----------------------------------------------- lixo -----------------------------------------------



/*import pg  = require('pg');
//import { Client } from 'pg';
const connectionString = 'postgresql://abias:admin@localhost:5432/imobiliariaDB'

const client = new pg.Client(connectionString);
client.connect()

const query = client.query('INSERT INTO cliente(nome, tipo, tipo2, rg, orgao, ufcliente, cpfcnpj, datanascimento, profissao, endereco, bairro, numero, cidade, cep, telefone1, telefone2, telefone3, email, ufrg) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11, $12,$13, $14,$15, $16, $17, $18, $19)',
                ['aaaaaaa', 'aaaaaaa','aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaaaaa', 'aaaaaaa', 'abias', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 111111, 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa']);
            client.on('end', () => { client.end(); });


*/


/*
const { Pool, Client } = require('pg')
const connectionString = 'postgresql://abias:admin@localhost:5432/imobiliariaDB'
const client = new Client({
    connectionString: connectionString,
})
client.connect()

const query = client.query('INSERT INTO cliente(bairro, cep, cidade, cpfcnpj, email, endereco, nome, numero, orgao, profissao, rg telefone1, telefone2, telefone3, tipo, tipo2, ufcliente, ufrg) VALUES($1, $2, $3, $4,$5, $6,$7, $8,$9, $10,$11, $12,$13, $14,$15, $16)',
                ['aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'brian.m.carlson@gmail.com', 'aaaaaaa', 'abias', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa']);
            query.on('end', () => { client.end(); });*/
/*
export class DBController {
    constructor() {
    }


    cadastrocliente(cliente: Cliente){


    }

    buscartodosclientes(nome:String):String{

        return 'aaaa'
    }


}*/


/*const query = client.query('INSERT INTO items(text, complete) values($1, $2)',
    ['aaaa', true]);
query.on('end', () => { client.end(); });*/
