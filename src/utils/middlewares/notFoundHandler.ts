import boom from "@hapi/boom";
import { Request, Response } from "express";

const notFoundHandler = (req: Request, res: Response) => {
    const {output: {statusCode, payload}} = boom.notFound();

    res.status(statusCode).json(payload);
}

export default notFoundHandler