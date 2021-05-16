import jwt from 'jsonwebtoken';
import config from '../../config';


const verify = (token: any) => {
    return jwt.verify(token, config.jwt.secretkey);
}

const getToken = (auth: any) => {
    if(!auth){
        throw new Error('There is not a token');
    }
    if(auth.indexOf('Bearer ') === -1){
        throw new Error('Formato invalido');
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

const decodeHeader = (authorization: any) => {
    const token = getToken(authorization);
    const decoded = verify(token);

    return decoded;

}

export default decodeHeader