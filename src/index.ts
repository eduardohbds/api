/* eslint-disable indent */
/* eslint-disable linebreak-style */
import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
        .then(()=>{
          //Só pode se conectar com a api se a conexão com
          //o banco de dados der certo
          const app = express();
          const port = 3002;

          app.listen(port,()=>{
            console.log(`Server is runnig:http://localhost:${port}`);
          });
        })
        .catch(()=>console.log('Erro ao conectar no mongodb'));






