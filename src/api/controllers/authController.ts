import express, { Request, Response } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { createUser } from "../../core/services/userService";
import '../../utils/auth/basic';

const router = express.Router();

router.post('/sign-in', (req: Request, res: Response) => {
    passport.authenticate('basic', (error, user) => {
        try {
            if(error || !user){
                // not implemented
            }
            req.login(user, {session: false}, async (error) => {
                if(error){
                    // not implemented
                }
                
                const payload = {sub: user.id, username: user.name};
                const token = jwt.sign(payload, "secret", {
                    expiresIn: "15m"
                });
                return res.status(200).json({
                    "access_token": token
                });
            });

        } catch (error) {
            // not implemented
        }
    })(req, res);
})

router.post('/sign-up', (req: Request, res: Response) => {
    const {name, email, password} = req.body;

    createUser(name, email, password).then( (userRegistered: object) => {
        res.status(201).json({
            "message": "User registered",
            "data": userRegistered
        })
    })
})

export default router;