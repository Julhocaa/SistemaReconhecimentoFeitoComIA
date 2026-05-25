exports.list = (req, res) => res.json({ message: 'Listar histórico de reconhecimentos' });
exports.create = (req, res) => res.status(201).json({ message: 'Registrar reconhecimento', data: req.body });
