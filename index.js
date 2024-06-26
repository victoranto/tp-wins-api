const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));

app.listen(3000, () => {
    console.log("Server running an port 3000");
})

app.get("/", (req, res, next) =>{
    res.json(
        [
            {
                "name": "Strade Bianche"
            },
            {
                "name": "Volta Ciclista a Catalunya Stage 2"
            },
            {
                "name": "Volta Ciclista a Catalunya Stage 3"
            },
            {
                "name": "Volta Ciclista a Catalunya Stage 6"
            },
            {
                "name": "Volta Ciclista a Catalunya Stage 7"
            },
            {
                "name": "Volta Ciclista a Catalunya"
            },
            {
                "name": "Liège-Bastogne-Liège"
            },
            {
                "name": "Giro d'Italia | Stage 2"
            },
            {
                "name": "Giro d'Italia | Stage 7"
            },
            {
                "name": "Giro d'Italia | Stage 8"
            }
        ]
    );
});

module.exports = app;
