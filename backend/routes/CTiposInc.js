import dotenv from 'dotenv';
import mysql from 'mysql2';
import {proxyP , proxyPut, proxyDelete} from '../middleware/proxyCTiposInc.js';
import {Router} from 'express';
const CTiposInc= Router();
dotenv.config();
let con = undefined;
CTiposInc.use((req,res,next)=>{
    let myconfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myconfig);
    next();
})

// metodo get
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
CTiposInc.get('/GetTiposInc', (req,res)=>{
    con.query(
        /*SQL*/`SELECT * FROM tipo_inc`,
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
CTiposInc.post('/PostTiposInc', proxyP, (req,res)=>{
    const { Tip_Id } = req.body;
    con.query(
        /*SQL*/`SELECT Tip_Id FROM tipo_inc WHERE Tip_Id = ${Tip_Id};`,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al consultar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } 
            if (data.length !== 0) {
                delete req.body.Tip_Id;
            }
            POSTCT(res,req.body);
        }
    );
})
function POSTCT(res,data) {
    con.query(
        /*SQL*/`INSERT INTO tipo_inc SET ?`,
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
CTiposInc.put('/PutTiposInc', proxyPut, (req,res)=>{
    const idSelect = req.query.idSelect;
    const DataJ = req.body;
    con.query(
        /*SQL*/`UPDATE tipo_inc SET ? WHERE Tip_Id = ${idSelect};`,
        DataJ,
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al actualizar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El tipo con el ID ${idSelect} no existe.`);
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
CTiposInc.delete('/DeleteTiposInc', proxyDelete, (req,res)=>{
    const IdDelete = req.body.IdDelete;
    con.query(
        /*SQL*/`DELETE FROM tipo_inc WHERE Tip_Id = ?;`,
        [IdDelete],
        (err,data,fil)=>{
            if (err) {
                const errorMessage = `Error al borrar la data`;
                res.status(500).send(`${errorMessage} error encontrado: ${err.sqlMessag}`);
            } else {
                if (data.affectedRows === 0) {
                    res.status(404).send(`El tipo con el ID ${IdDelete} no existe.`);
                } else {
                    res.send("Los datos han sido borrados correctamente");
                }
            }
        }
    );
})
// ━━━━━━━━━━━━ ◦ ❖ ◦ ━━━━━━━━━━━━
export default CTiposInc;