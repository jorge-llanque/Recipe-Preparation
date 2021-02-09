import express from "express";
import morgan from "morgan";
import 'reflect-metadata';
import { createConnection } from "typeorm";
import apiRoutes from "./routes";


export default () => {
    //create app
    const app = express();
    app.use(express.json());
    app.use(morgan('combined'));

    // get up connection to database
    createConnection();
    
    // set api routes
    apiRoutes(app);
    
    return app
}