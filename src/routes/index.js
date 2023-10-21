const express = require("express");
const routes = express.Router();

const usuarios = require("../controllers/usuarioController");

const bancos = require("../controllers/bancoController");
const ganhos = require("../controllers/ganhoscontroller");

/// Rotas de Usuários
routes.post("/usuarios/login", usuarios.login);

routes.get("/usuarios", usuarios.index);
routes.post("/usuarios/create", usuarios.create);
// routes.put("/usuarios", usuarios.update);``
// routes.delete("/usuarios/:id", usuarios.delete);

/// Rotas de Ganhos
routes.get("/ganhos", ganhos.index);
routes.post("/ganhos/create", ganhos.create);
routes.put("/ganhos/alterar", ganhos.alterar);
routes.delete("/ganhos/deletar", ganhos.deletar);

// /// Rotas de Bancos
routes.get("/bancos", bancos.index);
routes.post("/bancos/create", bancos.create);
// routes.put("/bancos/:id", bancos.update);
// routes.delete("/bancos/:id", bancos.delete);

module.exports = routes;




