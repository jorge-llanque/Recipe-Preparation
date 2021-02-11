import * as Controller from './controllers';

export default (server: any) => {
    server.use('/api', Controller.authCtrl)
    server.use('/api/category', Controller.categoryCtrl)
    server.use('/api/recipe', Controller.recipeCtrl)
    server.use('/api/filter', Controller.filterCtrl)
}