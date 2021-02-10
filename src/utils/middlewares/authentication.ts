import passport from "passport";
import "../auth/jwt";

const auth: any = passport.authenticate("jwt", {session: false})
export default auth