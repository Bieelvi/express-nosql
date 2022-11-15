import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://gabs:Gabrielvictor13@node-express-alura.gczh04c.mongodb.net");

const conn = () => {
    mongoose.connection.on("error", console.log.bind(console, "Erro de conexão!"));
    mongoose.connection.once("open", () => {
        console.log("Conexão feita com sucesso!");
    });
};

export default conn;