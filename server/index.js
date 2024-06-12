import express from "express"
import http from "http"
import cors from "cors"
import dotevn from "dotenv"
import passport from "passport";
import session from "express-session";
import connectMongo from "connect-mongodb-session";
import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { buildContext } from "graphql-passport";
import { db } from "./config/db.js";
import { passwordConfigure } from "./config/passport.js";

dotevn.config()
passwordConfigure()
const app = express()
const httpServer = http.createServer(app)
const mongoDBStore = connectMongo(session)

const store = new mongoDBStore({
    uri: process.env.Mongo_URI,
    collection: "sessions"
})
store.on("error", (err)=>console.log(err))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    store: store
}))
app.use(passport.initialize())
app.use(passport.session())

const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
})
await server.start()
app.use("/",
    cors({origin: "localhost:5173", credentials: true}),
    express.json(), expressMiddleware(server, {
    context: async ({req, res}) => buildContext({req, res}),
}))

await db();
await new Promise ((resolve)=> httpServer.listen({port: 4000}, resolve))
console.log(`Server is running on http://localhost:4000`);