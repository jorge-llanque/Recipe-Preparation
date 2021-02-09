import bcrypt from "bcryptjs";


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

