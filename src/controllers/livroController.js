import livros from "../models/Livro.js";

export default class LivroController 
{
    static novo = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - erro ao cadastrar novo livro!`});
                return;
            }

            res.status(201).send({
                message: 'Livro cadastrado com sucesso!',
                livro: livro.toJSON(),
            });
        });
    }

    static busca = (req, res) =>  {
        const id = req.params.id;

        livros.findById(id)
            .populate('autor')
            .exec((err, livros) => {
                if (err) {
                    res.status(404).send({message: `${err.message} - livro não encontrado`})
                    return;
                }
                
                res.status(200).send({livro: livros});
        });     
    }

    static buscaTodos = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json({livros: livros});
            });
    }

    static atualiza = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err, livros) => {
            if (err) {
                res.status(500).send({message: `${err.message} - erro ao atualizar o livro`})
                return;
            }

            res.status(200).send({
                message: `Livro atualizado com sucesso!`,
                itemAtualizado: req.body,
                livro: livros
            });
        });     
    }

    static remove = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, {$set: req.body}, (err, livros) => {
            if (err) {
                res.status(500).send({message: `${err.message} - erro ao deletar livro`})
                return;
            }

            res.status(200).send({
                message: `Livro deletado com sucesso!`,
                livro: livros
            });
        });     
    }

    static buscaEspecifica = (req, res) => {
        const parametros = req.query;
        const key = Object.keys(parametros)[0];
        const value = Object.values(parametros)[0];

        livros.find({[key]: {$regex: value, $options: 'i'}}, null, {}, (err, livros) => {
            if (err) {
                res.status(500).send({message: `${err.message} - erro ao buscar o livro pela busca especificada`})
                return;
            }
            res.status(200).send(livros);
        });
    }
}