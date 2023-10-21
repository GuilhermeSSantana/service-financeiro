const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    try {
      const ganhos = await prisma.ganhos.findMany();

      return res.status(200).json({ message: "Ganhos listados", ganhos });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao listar ganhos",
      });
    }
  },

  async create(req, res) {
    try {
      const { name, valor, userId, bancosId } = req.body;

      const ganhos = await prisma.ganhos.create({
        data: {
          name,
          valor,
          userId,
          bancosId,
        },
      });

      return res.status(200).json({ message: "Ganhos criados com sucesso!" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao criar ganhos",
        error: error.message,
      });
    }
  },


  async alterar (req, res) {
    try {
      const { id, name, valor, userId, bancosId } = req.body;

      const ganhos = await prisma.ganhos.update({
        where: {
          id: id,
        },
        data: {
          name,
          valor,
          userId,
          bancosId,
        },
      });

      return res.status(200).json({ message: "Ganhos alterados com sucesso!" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao alterar ganhos",
        error: error.message,
      });
    }
  },

  async deletar (req, res) {
    try {
      const { id } = req.body;

      const ganhos = await prisma.ganhos.delete({
        where: {
          id: id,
        },
      });

      return res.status(200).json({ message: "Ganhos deletados com sucesso!" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao deletar ganhos",
        error: error.message,
      });
    }
  },

};
