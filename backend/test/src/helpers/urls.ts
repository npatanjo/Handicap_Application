import dotenv from "dotenv";

dotenv.config();


const API_URI : string = "http://localhost:3000/api/" ;

const MONGO_URI: string = process.env.MONGODB_URI || "mongodb://localhost:27017";

/*
 * connection uri defaults to local hosting. I included some json files in the mongoDB root directory
 * incase a database is needed. More info on how to host a mongodb nosql server can be
 * found in the README there.
 */

export default {
    API_URI,
    MONGO_URI
}
