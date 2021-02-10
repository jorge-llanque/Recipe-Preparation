import { getManager, Like } from "typeorm";


export const insertData = async (table: string, data: object) => {
    try {
        const entityManager = getManager();
        return await entityManager.save(table, data);
    } catch (error) {
        return error
    }
}

export const getListData = async (table: string, id?: string, skip: number = 0, limit: number = 10 ) => {
    try {
        const entityManager = getManager();
        
        if(!id){
            return await entityManager.find(table, {skip: skip, take: limit});
        }else{
            return await entityManager.find(table, {where: {user: {id}}})
        }
    } catch (error) {
        return error
    }
}


export const getOneData = async (table: string, id?: string, data?: string) => {
    try {
        const entityManager = getManager();
        if(data){
            
            return await entityManager.findOne(table, {where: { name: data}})

        }else{
            return await entityManager.findOne(table, id)
        }

    } catch (error) {
        return error
    }
}

export const updateData = async (table: string, id: string, data: object) => {
    try {
        const entityManager = getManager();
        await entityManager.update(table, id, data);
        return await getOneData(table, id);
        
    } catch (error) {
        return error
    }
}

export const deleteData = async (table: string, id: string) => {
    try {
        const entityManager = getManager();
        await entityManager.delete(table, id);
    } catch (error) {
        return error
    }
}

export const getCategoryFiltered = async(table: string, data: string) => {
    try {
        const entityManager = getManager();
        return await entityManager.find(table, {where: {name: data}, relations: ["recipes"]})
    } catch (error) {
        return error
    }
}

export const getFilterRecipe = async(table: string, data: string, column: string) => {
    try {
        const entityManager = getManager();
        if(column == "name"){
            return await entityManager.find(table, {name: Like(`%${data}%`)})
        }
        if(column == "descriptionRecipe"){
            return await entityManager.find(table, {description: Like(`%${data}%`)})
        }
        if(column == "ingredientsRecipe"){
            return await entityManager.find(table, {ingredients: Like(`%${data}%`)})
        }
    } catch (error) {
        return error
    }
}