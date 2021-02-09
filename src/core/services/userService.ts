import { designUser } from "../models";
import { insertData } from "../../repository/queries/query";

const entity: string = "User";

export const signUp = async (name: string, email: string, password: string): Promise<any> => {
    try {
        const newUser = designUser(name, email, password);
        return await insertData(entity, newUser);

    } catch (error) {
        return error;
    }
}