import { deleteData, getListData, getOneData, insertData, updateData } from "../../repository/queries/query";
import { designRecipe } from "../models";
import decode from "../../utils/auth/decodeHeader";

const entity: string = 'Recipe';

export const createRecipe = async (data: any): Promise<any> => {
    
    const newRecipe: object = designRecipe(data);
    return await insertData(entity, newRecipe)
}

export const listAllRecipe = async (pagination: any, authorization?: string): Promise<any> => {
    try {
        const {skip, limit} = pagination;
        if(authorization){
            const {sub}: any = decode(authorization);
            console.log(sub);
            
            return await getListData(entity, sub, skip, limit);
        }else{
            return await getListData(entity, undefined, skip, limit);
        }
    } catch (error) {
        return error
    }
}

export const getOneRecipe = async (id: string): Promise<any> => {
    try {
        return await getOneData(entity, id);
    } catch (error) {
        return error
    }
}

export const updateRecipe = async (id: string, data: object): Promise<any> => {
    try {
        return await updateData(entity, id, data);
    } catch (error) {
        return error
    }
}

export const removeRecipe = async (id: string): Promise<void> => {
    try {
        await deleteData(entity, id);
    } catch (error) {
        return error
    }
}