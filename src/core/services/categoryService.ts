import { deleteData, getListData, getOneData, insertData, updateData } from "../../repository/queries/query"

const entity: string = "Category";

export const createCategory = async (name: string): Promise<any> => {
    try {
        return await insertData(entity, {name});
    } catch (error) {
        return error
    }
}

export const listAllCategory = async (pagination: any): Promise<any> => {
    try {
        const {skip, limit} = pagination;
        return await getListData(entity, undefined, skip, limit);
    } catch (error) {
        return error
    }
}

export const getOneCategory = async (id: string): Promise<any> => {
    try {
        return await getOneData(entity, id);
    } catch (error) {
        return error
    }
}

export const updateNameCategory = async (id: string, data: object): Promise<any> => {
    try {
        return await updateData(entity, id, data);
    } catch (error) {
        return error
    }
}

export const removeCategory = async (id: string): Promise<void> => {
    try {
        await deleteData(entity, id);
    } catch (error) {
        return error
    }
}