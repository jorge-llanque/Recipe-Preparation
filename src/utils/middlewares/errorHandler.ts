import boom from "@hapi/boom";
import config from "../../config";

const withErrorStack = (error: any, stack: any) => {
    if(config.api.dev == undefined){
        return {...error, stack}
    }
    return error;
}

export const logErrors = (err: any, req: any, res: any, next: any) => {
    console.log(err);
    next(err);
}

export const wrapErrors = (err: any, req: any, res: any, next: any) => {
    if(!err.isBoom){
        next(boom.badImplementation(err));
    }
    next(err);
}

export const errorHandler = (err: any, req: any, res: any, next: any) => {
    const { output: {statusCode, payload}} = err;

    res.status(statusCode).json(withErrorStack(payload, err.stack));
}