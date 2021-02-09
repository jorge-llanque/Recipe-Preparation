import userController from "./controllers/userController";
import categoryController from "./controllers/categoryController";

export default (server: any) => {
    server.use('/api/user', userController)
    server.use('/api/category', categoryController)
}