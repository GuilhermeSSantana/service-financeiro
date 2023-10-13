const { PrismaClient } = require("@prisma/client");
const e = require("express");

const prisma = new PrismaClient();

module.exports = {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });

      return res.status(200).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao criar usuário",
      });
    }
  },

  async index(req, res) {
    try {
      const users = await prisma.user.findMany();

      return res.status(200).json({ message: "Usuários listados", users });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao listar usuários",
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const user = await prisma.user.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
          email,
          password,
        },
      });

      return res.status(200).json({ message: "Usuário atualizado" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao atualizar usuário",
      });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const user = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json({ message: "Usuário deletado" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao deletar usuário",
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findFirst({
        where: {
          email: email,
          password: password,
        },
      });

      if (user) {
        return res
          .status(200)
          .json({ message: "Login realizado com sucesso!" });
      } else if (email == "" || password == "") {
        return res
          .status(400)
          .json({ message: "Email e senha não podem ser vazios" });
      } else {
        return res.status(400).json({ message: "Usuário ou senha incorreta!" });
      }
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao logar usuário",
      });
    }
  },
};
