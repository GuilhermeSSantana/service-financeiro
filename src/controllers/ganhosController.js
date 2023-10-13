const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async create(req, res) {
    try {
      const { name, valor, } = req.body;

      const ganhos = await prisma.ganhos.create({
        data: {
          name,
          valor, 
        },
      });

      return res
        .status(200)
        .json({ message: "Ganhos criados com sucesso!" });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao criar ganhos",
        error: error.message,
      });
    }
  },

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

  
};
