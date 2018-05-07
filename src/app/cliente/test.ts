const { Pool, Client } = require('pg')
const connectionString = 'postgresql://abias:admin@localhost:5432/imobiliariaDB'
const client = new Client({
    connectionString: connectionString,
})
client.connect();
const text = 'INSERT INTO users(nome, sobrenome) VALUES($1, $2) RETURNING *';
const values = ['brianc', 'brian.m.carlson@gmail.com'];

// callback
client.query(text, values, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows[0])
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    }
    client.end();
});



