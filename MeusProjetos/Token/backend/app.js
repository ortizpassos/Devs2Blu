const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = 'segredo123';

// Rota de cadastro
app.post('/cadastro', async (req, res) => {
  const { nome, senha } = req.body;
  if (!nome || !senha) return res.status(400).json({ erro: 'Campos obrigatórios.' });

  const hash = await bcrypt.hash(senha, 10);

  db.run(`INSERT INTO usuarios (nome, senha) VALUES (?, ?)`, [nome, hash], function (err) {
    if (err) return res.status(500).json({ erro: 'Usuário já existe ou erro interno.' });

    const token = jwt.sign({ id: this.lastID, nome }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
});

// Rota de login
app.post('/login', (req, res) => {
  const { nome, senha } = req.body;

  db.get(`SELECT * FROM usuarios WHERE nome = ?`, [nome], async (err, row) => {
    if (err || !row) return res.status(401).json({ erro: 'Usuário não encontrado.' });

    const valido = await bcrypt.compare(senha, row.senha);
    if (!valido) return res.status(403).json({ erro: 'Senha incorreta.' });

    const token = jwt.sign({ id: row.id, nome: row.nome }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
});

// Verifica token
app.get('/verificar', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ erro: 'Token ausente.' });

  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ mensagem: `Bem-vindo, ${decoded.nome}` });
  } catch {
    res.status(403).json({ erro: 'Token inválido.' });
  }
});

// Iniciar servidor
app.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});
