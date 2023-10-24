const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    const bancos = await prisma.bancos.findMany();

    return res.json(bancos);
  },

  async create(req, res) {
    try {
      const { name, tipoConta } = req.body;

      const banco = await prisma.bancos.create({
        data: {
          name,
          tipoConta,
        },
      });

      return res
        .status(200)
        .json({ message: "Banco criado com sucesso!", banco });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Erro ao criar banco",
      });
    }
  },

  async alterar(req, res) {
    try {
      const { id } = req.params;
      const { name, tipoConta } = req.body;

      const banco = await prisma.bancos.update({
        where: {
          id: id,
        },
        data: {
          name,
          tipoConta,
        },
      });

      return res
        .status(200)
        .json({ message: "Banco alterado com sucesso!", banco });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Erro ao alterar banco",
      });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;

      const banco = await prisma.bancos.delete({
        where: {
          id: id,
        },
      });

      return res
        .status(200)
        .json({ message: "Banco deletado com sucesso!", banco });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Erro ao deletar banco",
      });
    }
  },
};
