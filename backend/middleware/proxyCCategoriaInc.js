import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {validatePostCategoriaInc, validateQueryPutCategoriaInc, validateBodyPutCategoriaInc, validateDeleteCategoriaInc } from "../controller/vCategoriaInc.js";
import { validate } from 'class-validator';

const proxyP = express();
const proxyPut = express();
const proxyDelete = express();

proxyP.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostCategoriaInc, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPut.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutCategoriaInc, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutCategoriaInc, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDelete.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteCategoriaInc, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyP , proxyPut, proxyDelete};