const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./usuarios.db');

// Cria a tabela se não existir
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT UNIQUE,
    senha TEXT
  )`);
});

module.exports = db;
