const express = require("express")
const Book = require("../models/bookModel");

exports.createBook = async (req, res, next) => {

    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Error in book creation" })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        
        const book = await new Book(newBook)
        book.save()

        

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send({ message: error.message })
    }

}

exports.getAllBook = async (req, res, next) => {

    try { 
        const books = await Book.find({})
        res.status(200).send(
            {
                cont: books.length,
                data: books,
            }
        )
    }
    catch (error) {
        res.status(500).send({ message: error.message })
    }

    next()
}


exports.getABook = async (req, res, next) =>{

    try{
        const {id}=  req.params
        const book = await Book.findById(id)
        return res.status(200).json(book)
    }catch(error){
        return res.status(500).send({message: error.message})
    }

}

exports.updateABook = async (req, res, next) => {
    try {
        
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Tous les champs sont requis" });
        }

        const { id } = req.params;

        
        const book = await Book.findByIdAndUpdate(id, req.body);

        
        if (!book) {
            return res.status(404).send({ message: "Livre non trouvé" });
        }

        
        return res.status(200).json(book);
    } catch (error) {
        
        return res.status(500).send({ message: error.message });
    }
}

exports.deleteABook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Livre non trouvé" });
        }

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}