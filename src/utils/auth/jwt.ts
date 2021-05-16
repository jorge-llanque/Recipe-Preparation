import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { getUserbyColumn } from "../../core/services/userService";
import config from "../../config";


passport.use(
    new Strategy(
        {
            secretOrKey: config.jwt.secretkey,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        async (tokenPayload, cb) => {
            try {
                
                const user: any = await getUserbyColumn(tokenPayload.username);
                console.log(user);
                
                if(!user){
                    return cb("unauthorized", false);
                }

                return cb(null, user);

            } catch (error) {
                return cb(error);
            }
        }
    )
)