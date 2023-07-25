import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyP , proxyPut, proxyDelete} from '../middleware/proxyCCategoriaInc.js';
import {Router} from 'express';
const CCategoriaInc= Router();
dotenv.config();
let con = undefined;
CCategoriaInc.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CCategoriaInc.get('/GetCategoriaInc', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM categoria_inc`,
        (err,data,fil)=>{
            if (data.length == 0) {
                const errorMessage = `No hay data disponible en esta BD`;
                res.status(500).send(errorMessage);
            } else {
                data = JSON.stringify(data);
                res.send(JSON.parse(data));
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo post
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CCategoriaInc.post('/PostCategoriaInc', proxyP, (req,res)=>{
    const { Cat_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Cat_Id FROM categoria_inc WHERE Cat_Id = ${Cat_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Cat_Id;
            }
            POSTCI(res,req.body);
        }
    );
})
function POSTCI(res,data) {
    con.query(
        /*SQL*/`INSERT INTO categoria_inc SET ?`,
        data,
        (err,data2,fil)=>{
            if (err) {
                const errorMessage = `Error al enviar los datos`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            res.send("La data se ha enviado exitosamente");
        }
    );
}
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo put
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CCategoriaInc.put('/PutCategoriaInc', proxyPut, (req,res)=>{
    const idSelect = req.query.idSelect;
    const DataJ = req.body;
    con.query(
        /*SQL*/`UPDATE categoria_inc SET ? WHERE Cat_Id = ${idSelect};`,
        DataJ,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La categoria con el ID ${idSelect} no existe.`);
                } else {
                    res.send("Los datos han sido actualizados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━

// metodo delete
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CCategoriaInc.delete('/DeleteCategoriaInc', proxyDelete, (req,res)=>{
    const IdDelete = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM categoria_inc WHERE Cat_Id = ?;`,
        [IdDelete],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`La categoria con el ID ${IdDelete} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CCategoriaInc;