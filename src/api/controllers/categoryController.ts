import express, { Request, Response } from "express";
import { createCategory, getOneCategory, listAllCategory, removeCategory, updateNameCategory } from "../../core/services/categoryService";

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    const {name} = req.body;
    createCategory(name).then((data: object) => {
        res.status(201).json({
            "message": "Category created",
            "data": data
        })
    })
})

router.get('/', (req: Request, res: Response) => {
    listAllCategory().then((list: []) => {
        res.status(200).json({
            "message": "list Categories",
            "data": list
        })
    })
})

router.get('/:id', (req: Request, res: Response) => {
    const {id}  = req.params
    getOneCategory(id).then((data: object) => {
        res.status(200).json({
            "message": "one category",
            "data": data
        })
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const {id} = req.params;
    const {name} = req.body;
    updateNameCategory(id, {name}).then((data: object) => {
        res.status(200).json({
            "message": "Category updated",
            "data": data
        })
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const {id} = req.params;
    removeCategory(id).then(() => {
        res.status(200).json({
            "message": "data removed"
        })
    })
})

export default router