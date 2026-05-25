exports.list = (req, res) => res.json({ message: 'Listar pessoas cadastradas' });
exports.create = (req, res) => res.status(201).json({ message: 'Cadastrar pessoa', data: req.body });
