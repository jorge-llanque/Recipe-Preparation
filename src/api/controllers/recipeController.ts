import express, { Request, Response, NextFunction } from "express";
import { recipeService } from "../../core/services";
import auth from "../../utils/middlewares/authentication";

const router = express.Router();

router.post('/', auth, (req: Request, res: Response, next: NextFunction) => {
    const data: object = {
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        category: req.body.category,
        authorization: req.headers.authorization
    }
    recipeService.createRecipe(data).then((list: object) => {
        res.status(201).json({
            "message": "Recipe added",
            "data": list
        })
    }).catch((error: Error) => {
        next(error)
    })
})

router.get('/:skip/:limit', (req: Request, res: Response, next: NextFunction) => {
    const pagination =  {
        skip: req.params.skip,
        limit: req.params.limit
    }
    recipeService.listAllRecipe(pagination).then((list: []) => {
        res.status(200).json({
            "message": "Recipes listed",
            "data": list
        })
    }).catch((error: Error) => {
        next(error)
    })
})

router.get('/myrecipes/:skip/:limit', auth, (req: Request, res: Response, next: NextFunction) => {
    const authorization: any = req.headers.authorization;
    const pagination =  {
        skip: req.params.skip,
        limit: req.params.limit
    }
    recipeService.listAllRecipe(pagination, authorization).then((list: []) => {
        res.status(201).json({
            "message": "Recipes listed",
            "data": list
        })
    }).catch((error: Error) => {
        next(error);
    })
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    recipeService.getOneRecipe(id).then((data: object) => {
        res.status(200).json({
            "message": "Recipe obteined",
            "data": data
        })
    }).catch((error: Error) => {
        next(error);
    })
})

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    const data = req.body;
    recipeService.updateRecipe(id, data).then((data: object) => {
        res.status(200).json({
            "message": "Data updated",
            "data": data
        })
    }).catch((error: Error) => {
        next(error);
    })
})

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;

    recipeService.removeRecipe(id).then(() => {
        res.status(200).json({
            "message": "data removed"
        })
    }).catch((error: Error) => {
        next(error);
    })
})



export default router;