import dotnev from 'dotenv';
import express from 'express';
import CArea from './routes/CArea.js';
import CCategoriaInc from './routes/CCategoriaInc.js';
import CTiposInc from './routes/CTiposInc.js';
console.clear();
dotnev.config();

const CampusApi = express();
CampusApi.use(express.json());
// Endpoint con los cruds de las tablas de la base de datos
// ════════ ⋆★⋆ ════════
CampusApi.use("/Area", CArea);
CampusApi.use("/CategoriaInc", CCategoriaInc);
CampusApi.use("/TiposInc", CTiposInc);
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
CampusApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})