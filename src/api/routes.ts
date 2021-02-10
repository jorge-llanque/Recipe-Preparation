import recipeController from "./controllers/recipeController";
import authController from "./controllers/authController";
import categoryController from "./controllers/categoryController";
import filterController from "./controllers/filterController";


export default (server: any) => {
    server.use('/api', authController)
    server.use('/api/category', categoryController)
    server.use('/api/recipe', recipeController)
    server.use('/api/filter', filterController)
}