import { designUser } from "../models";
import { insertData, getOneData } from "../../repository/queries/query";

const entity: string = "User";

export const createUser = async (name: string, email: string, password: string): Promise<any> => {
    try {
        const newUser = designUser(name, email, password);
        return await insertData(entity, newUser);

    } catch (error) {
        return error;
    }
}

export const getUserbyColumn = async (data: string): Promise<any> => {
    try {
        return await getOneData(entity, undefined, data);
    } catch (error) {
        return error;
    }
}