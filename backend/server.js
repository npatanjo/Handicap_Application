// create an express app
const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

/*
 * Username is set to <dev> 
 * PASSWORD is set to <gnu711>
 * CLUSTER_NAME is set to <handicap>
 * DATABASE_NAME is set to <handicap>
 * The name of the heroku app is <handicap-app-711> dont ask me why smh
 */

// const uri = "mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority";

const uri = process.env.MONGODB_URI;

// use the express-static middleware
app.use(express.static("public"));

// database code



// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
