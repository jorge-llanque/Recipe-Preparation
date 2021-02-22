import express, { Request, Response, NextFunction } from "express";
import { categoryService } from "../../core/services";
import auth from "../../utils/middlewares/authentication";

const router = express.Router();

router.post('/', auth, (req: Request, res: Response, next: NextFunction) => {
    const {name} = req.body;
    categoryService.createCategory(name).then((data: object) => {
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
    categoryService.listAllCategory(pagination).then((list: []) => {
        res.status(200).json({
            "message": "List categories",
            "data": list
        })
    }).catch((error: Error) => {
        next(error);
    })
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id}  = req.params
    categoryService.getOneCategory(id).then((data: object) => {
        res.status(200).json({
            "message": "One category",
            "data": data
        })
    }).catch((error: Error) => {
        next(error);
    })
})

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const {name} = req.body;
    categoryService.updateNameCategory(id, {name}).then((data: object) => {
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
    categoryService.removeCategory(id).then(() => {
        res.status(200).json({
            "message": "Category removed"
        })
    }).catch((error: Error) => {
        next(error);
    })
})

export default router