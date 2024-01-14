import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import router from './routes/Routes.js';
const app = express();
// app.use(cors());
app.use(express.json());
app.use('/blogs',router);
try{
 await   db.authenticate();
    console.log('Conectado a la base de datos')
}
catch(error){
    console.log(`No se pudo conectar a la base de datos: ${error}`)
}
app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})
app.listen(8181,()=>{
    console.log('Servidor corriendo en http://localhost:8181')
})