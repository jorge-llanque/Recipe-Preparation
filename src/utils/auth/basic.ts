import passport from "passport";
import { BasicStrategy } from "passport-http";
import boom from "@hapi/boom";
import bcryptjs from "bcryptjs";
import { getUserbyColumn } from "../../core/services/userService";

passport.use(
    new BasicStrategy( async (username, password, cb) => {
        try {
            
            const user = await getUserbyColumn(username);

            if(!user){
                return cb(boom.unauthorized(), false);
            }

            if(!(await bcryptjs.compare(password, user.password))){
                return cb(boom.unauthorized(), false);
            }
            delete user.password;
            return cb(null, user);
        } catch (error) {
            return cb(error);
        }

    })
)