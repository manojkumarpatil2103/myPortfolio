const express = require("express");
const {MongoClient, ObjectId} = require("mongodb");
const cors = require("cors");


const app = express();
const clientMessages = express.Router();
app.use(cors());
app.use(express.json());
app.use("/messages", clientMessages);

// Configuration of Mongo
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
let db;

// get message from client
clientMessages.post("/", async (req, res) => { // validation can be added
    if(!req == req.body) {
        res.status(404).send("Bad request");
    } else{
        let data = await db.collection("messages").insertOne(req.body);
        res.status(201).send(req.body);
    }
    
});

async function connectToMongoAndStartServer() {
    await client.connect();
    db = client.db("messageFromClient"); // USE DATABASE
    console.log("Connected to mongoDatabase");

    app.listen(3001, () => {
        console.log("Server is listening on port 3001");
    })
}

connectToMongoAndStartServer().then(() => console.log("Connected")).catch(console.error);