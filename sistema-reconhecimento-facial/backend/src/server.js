const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/persons', require('./routes/personRoutes'));
app.use('/api/recognitions', require('./routes/recognitionRoutes'));
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
