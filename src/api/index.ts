import express from "express";
import morgan from "morgan";
import 'reflect-metadata';
import { createConnection } from "typeorm";
import { errorHandler, logErrors, wrapErrors } from "../utils/middlewares/errorHandler";
import notFoundHandler from "../utils/middlewares/notFoundHandler";
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

    // Catch 404
    app.use(notFoundHandler);

    // Error middlewares
    app.use(logErrors);
    app.use(wrapErrors);
    app.use(errorHandler);
    
    return app
}