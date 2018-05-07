import { Client } from 'pg';
const connectionString = 'postgresql://abias:admin@localhost:5432/imobiliariaDB'

const client = new Client({
  connectionString: connectionString,
})
client.connect()

const query = client.query('INSERT INTO cliente(nome, tipo, tipo2, rg, orgao, ufcliente, cpfcnpj, datanascimento, profissao, endereco, bairro, numero, cidade, cep, telefone1, telefone2, telefone3, email, ufrg) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11, $12,$13, $14,$15, $16, $17, $18, $19)',
                ['aaaaaaa', 'aaaaaaa','aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'brian.m.carlson@gmail.com', 'aaaaaaa', 'abias', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 111111, 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa', 'aaaaaaa']);
            client.on('end', () => { client.end(); });