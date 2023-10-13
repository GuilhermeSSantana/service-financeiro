const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    try {
      const bancos = await prisma.bancos.findMany();

      return res.status(200).json({ message: "Usuários listados", bancos });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao listar usuários",
      });
    }
  },

  async create(req, res) {
    try {
      const { name, tipoConta } = req.body;

      const bancos = await prisma.bancos.create({
        data: {
          name,
          tipoConta,
        },
      });

      return res.status(200).json({ message: "Banco criado com sucesso!" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao criar Banco",
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, tipoConta } = req.body;

      const bancos = await prisma.bancos.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
          tipoConta,
        },
      });

      return res.status(200).json({ message: "Banco atualizado com sucesso!" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao atualizar Banco",
      });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const bancos = await prisma.bancos.delete({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json({ message: "Banco deletado com sucesso!" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao deletar Banco",
      });
    }
  },
};
