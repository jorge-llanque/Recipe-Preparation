import express, { Request, Response, NextFunction } from "express";
import { filterService } from "../../core/services";
import auth from "../../utils/middlewares/authentication";

const router = express.Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    const filterRequest = req.body;
    filterService.filterData(filterRequest).then((list: any) => {
        res.status(200).json({
            message: "Filtered",
            "data": list
        })
    }).catch((error: Error) => {
        next(error)
    })
})

export default router;