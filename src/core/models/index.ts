import bcrypt from "bcryptjs";
import decode from "../../utils/auth/decodeHeader";


const crypt = (data: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync( data, salt);

    return hash
}


export const designUser = (name: string, email: string, password: string) => {
    return {
        name,
        email,
        password: crypt(password)
    }
}

export const designRecipe = (data: any) => {
    const {name, description, recipe, category, ingredients, authorization} = data;
    const {sub}: any = decode(authorization);
    return {
        name,
        description,
        recipe,
        ingredients,
        category,
        user: sub
    }
}