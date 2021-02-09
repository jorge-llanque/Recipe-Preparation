import express, { Request, Response } from "express";
import { signUp } from "../../core/services/userService";

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    const {name, email, password} = req.body;

    signUp(name, email, password).then( (userRegistered: object) => {
        res.status(201).json({
            "message": "User registered",
            "data": userRegistered
        })
    })
})

export default router;