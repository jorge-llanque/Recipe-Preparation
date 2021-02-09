import authController from "./controllers/authController";
import categoryController from "./controllers/categoryController";

export default (server: any) => {
    server.use('/api', authController)
    server.use('/api/category', categoryController)
}