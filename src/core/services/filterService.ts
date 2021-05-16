import { getCategoryFiltered, getFilterRecipe } from "../../repository/queries/query";



export const filterData = async (data: any): Promise<any> => {
    try {
                if(data.category){
                    return await getCategoryFiltered('Category', data.category);
                }
                if(data.nameRecipe){
                    return await getFilterRecipe('Recipe', data.nameRecipe, 'name');
                }
                if(data.descriptionRecipe){
                    return await getFilterRecipe('Recipe', data.descriptionRecipe, 'descriptionRecipe');
                }
                if(data.ingredientsRecipe){
                    return await getFilterRecipe('Recipe', data.ingredientsRecipe, 'ingredientsRecipe');
                }
    } catch (error) {
        return error
    }
};