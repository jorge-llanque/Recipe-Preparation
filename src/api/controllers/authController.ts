import express, { NextFunction, Request, Response } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { createUser } from "../../core/services/userService";
import '../../utils/auth/basic';
import config from "../../config";
import boom from "@hapi/boom";

const router = express.Router();

router.post('/sign-in', (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('basic', (error, user) => {
        try {
            if(error || !user){
                next(boom.unauthorized());
            }
            req.login(user, {session: false}, async (error) => {
                if(error){
                    next(error);
                }

                const payload = {sub: user.id, username: user.name};
                const token = jwt.sign(payload, config.jwt.secretkey, {
                    expiresIn: "12h"
                });
                return res.status(200).json({
                    "access_token": token
                });
            });

        } catch (error: any) {
            next(error);
        }
    })(req, res);
})

router.post('/sign-up', (req: Request, res: Response, next: NextFunction) => {
    const {name, email, password} = req.body;

    createUser(name, email, password).then( (userRegistered: object) => {
        res.status(201).json({
            "message": "User registered",
            "data": userRegistered
        })
    }).catch((error: Error) => {
        next(error);
    })
})

export default router;