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
      console.log(req.body);

      const banco = await prisma.bancos.create({
        data: {
          name,
          tipoConta,
        },
      });

      return res.status(200).json({ message: "Banco criado com sucesso!" , banco});
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Erro ao criar banco",
      });
    }
  },
};
