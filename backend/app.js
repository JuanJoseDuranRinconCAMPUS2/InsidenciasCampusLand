import dotnev from 'dotenv';
import express from 'express';
import CArea from './routes/CArea.js';
console.clear();
dotnev.config();

const CampusApi = express();
CampusApi.use(express.json());
CampusApi.use("/Area", CArea);
// Endpoint con los cruds de las tablas de la base de datos
// ════════ ⋆★⋆ ════════
// ════════ ⋆★⋆ ════════

const config = JSON.parse(process.env.MY_CONFIG);
CampusApi.listen(config, ()=>{console.log(`http://${config.hostname}:${config.port}`);})