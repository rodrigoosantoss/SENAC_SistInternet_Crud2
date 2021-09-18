const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class App {

    constructor(){
        this.app = express()
        this.middlewares();
        this.routes();
    }


    middlewares(){
        this.app.use(express.json());
        //next middleware que intercepta uma requisição
        this.app.use((req, res, next) => {
            res.header("Access-Conrtoll-Allow-Origin", "*"),
            res.header("Access-Conrtoll-Allow-Method", "GET, POST, PUT, DELETE"),
            res.header("Access-Conrtoll-Allow-Headers", "Content-type, Authorization, Acept, Origin, X-Requested-With")
            this.app.use(cors())
            next();

        })
    }

    routes(){
        this.app.use(routes)
    }

}

module.exports = new App().app;