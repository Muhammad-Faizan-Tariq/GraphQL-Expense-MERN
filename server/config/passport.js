import User from "../models/user.js";
import passport from "passport";
import bcrypt from "bcryptjs";
import { GraphQLLocalStrategy } from "graphql-passport";

export const passwordConfigure = async () => {
    
    passport.serializeUser((user,done)=>{
        done(null, user.id)
    })

    passport.deserializeUser(async(id, done)=>{
        try {
            const user = await User.findById(id)  
            done(null, user)  
        } catch (error) {
            done(error)
        }
    })

    passport.use(new GraphQLLocalStrategy(async(username, password, done)=>{
            try {
                const user = await User.findOne({username})
                if(!user){
                    throw new Error("Invalid username or password")
                }

                const isMatchedPassword = await bcrypt.compare(password, user.password)
                if(!isMatchedPassword){
                    throw new Error("Invalid username or password")
                }

                return  done(null, user)
            } catch (error) {
                return done(error)
            }
        })
    )
}