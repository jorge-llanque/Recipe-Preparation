import * as dotenv from "dotenv";
dotenv.config();

export default {
    jwt: {
        secretkey: process.env.SECRET_KEY || 'notesecret!'
    },
    api: {
        dev: process.env.NODE_ENV
    }

}