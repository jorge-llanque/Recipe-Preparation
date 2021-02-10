import express, { Request, Response, NextFunction } from "express";
import { createCategory, getOneCategory, listAllCategory, removeCategory, updateNameCategory } from "../../core/services/categoryService";
import auth from "../../utils/middlewares/authentication";

const router = express.Router();

router.post('/', auth, (req: Request, res: Response, next: NextFunction) => {
    const {name} = req.body;
    createCategory(name).then((data: object) => {
        res.status(201).json({
            "message": "Category created",
            "data": data
        })
    }).catch((error: Error) => {
        next(error);
    })
})

router.get('/:skip/:limit', auth, (req: Request, res: Response, next: NextFunction) => {
    const pagination =  {
        skip: req.params.skip,
        limit: req.params.limit
    }
    listAllCategory(pagination).then((list: []) => {
        res.status(200).json({
            "message": "list Categories",
            "data": list
        })
    }).catch((error: Error) => {
        next(error);
    })
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id}  = req.params
    getOneCategory(id).then((data: object) => {
        res.status(200).json({
            "message": "one category",
            "data": data
        })
    }).catch((error: Error) => {
        next(error);
    })
})

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const {name} = req.body;
    updateNameCategory(id, {name}).then((data: object) => {
        res.status(200).json({
            "message": "Category updated",
            "data": data
        })
    }).catch((error: Error) => {
        next(error);
    })
})

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    removeCategory(id).then(() => {
        res.status(200).json({
            "message": "data removed"
        })
    }).catch((error: Error) => {
        next(error);
    })
})

export default router