const {Review} = require("../models");
const httpStatus = require("http-status");

const create = async (req, res) => {
    try{
        const result = await Review.create(req.body);
        res.json(result);   
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

const findAll = async (req, res) => {
    try{        
        console.log(req.query);
        const result = await Review.find(req.query).exec();
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

const updateOne = async(req, res) => {
    try{
        const movieId = req.params.movieId;

        const updated = await Review.updateOne({movieId: movieId}, {$set: req.body});
        res.json(updated);

    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const deleteOne = async (req,res) => {
    try{
        const movieId = req.params.movieId;
        const deleted = await Review.deleteOne({movieId: movieId});
        res.json(deleted);
    }catch(e){  
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const findOne = async (req, res) => {
    try{
        const movieId = req.params.movieId;
        const fetched = await Review.findOne({movieId:movieId});
        res.json(fetched);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    create, findAll, updateOne, deleteOne, findOne
}