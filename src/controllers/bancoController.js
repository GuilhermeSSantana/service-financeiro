const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
    async create(req, res) {
        try {
          const { name, tipoConta } = req.body;
    
          const bancos = await prisma.bancos.create({
            data: {
              name,
              tipoConta,
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
              const bancos = await prisma.bancos.findMany();
        
              return res.status(200).json({ message: "Usuários listados", bancos });
            } catch (error) {
              return res.status(400).json({
                message: "Erro ao listar usuários",
              });
            }
          }

};