import  express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {validatePostTiposInc, validateQueryPutTiposInc, validateBodyPutTiposInc, validateDeleteTiposInc} from "../controller/vCTiposInc.js";
import { validate } from 'class-validator';

const proxyP = express();
const proxyPut = express();
const proxyDelete = express();

proxyP.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validatePostTiposInc, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyPut.use(async(req, res, next)=>{
    try {
        let dataQuerry = plainToClass(validateQueryPutTiposInc, req.query, {excludeExtraneousValues: true});
        await validate(dataQuerry);
        req.query = JSON.parse(JSON.stringify(dataQuerry));
        let dataBody = plainToClass(validateBodyPutTiposInc, req.body, {excludeExtraneousValues: true});
        await validate(dataBody);
        req.body = JSON.parse(JSON.stringify(dataBody));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});
proxyDelete.use(async(req, res, next)=>{
    try {
        let data = plainToClass(validateDeleteTiposInc, req.body, {excludeExtraneousValues: true});
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
});

export {proxyP , proxyPut, proxyDelete};