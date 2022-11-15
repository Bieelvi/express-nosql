import autores from "../models/Autor.js";

export default class AutorController 
{
    static novo = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - erro ao cadastrar novo autor!`});
                return;
            }

            res.status(201).send({
                message: 'autor cadastrado com sucesso!',
                autor: autor.toJSON(),
            });
        });
    }

    static busca = (req, res) =>  {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(404).send({message: `${err.message} - autor não encontrado`})
                return;
            }
            
            res.status(200).send({autor: autores});
        });     
    }

    static buscaTodos = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json({autores: autores});
        });
    }

    static atualiza = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err, autores) => {
            if (err) {
                res.status(500).send({message: `${err.message} - erro ao atualizar o autor`})
                return;
            }

            res.status(200).send({
                message: `Autor atualizado com sucesso!`,
                itemAtualizado: req.body,
                autor: autores
            });
        });     
    }

    static remove = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, {$set: req.body}, (err, autores) => {
            if (err) {
                res.status(500).send({message: `${err.message} - erro ao deletar autor`})
                return;
            }

            res.status(200).send({
                message: `Autor deletado com sucesso!`,
                autor: autores
            });
        });     
    }
}