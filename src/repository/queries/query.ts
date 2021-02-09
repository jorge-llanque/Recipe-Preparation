import { getManager } from "typeorm";


export const insertData = async (table: string, data: object) => {
    try {
        const entityManager = getManager();
        return await entityManager.save(table, data);
    } catch (error) {
        return error
    }
}

export const getListData = async (table: string) => {
    try {
        const entityManager = getManager();
        return await entityManager.find(table);
    } catch (error) {
        return error
    }
}


export const getOneData = async (table: string, id: string) => {
    try {
        const entityManager = getManager();
        return await entityManager.findOne(table, id);

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