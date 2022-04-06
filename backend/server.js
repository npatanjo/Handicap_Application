// create an express app
const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority";

// use the express-static middleware
app.use(express.static("public"));

// database code



// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
