const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = "mongodb+srv://nexusdb:mODnkvL9UKgsmlmi@nexuscluster.a5pqb.mongodb.net/?retryWrites=true&w=majority&appName=NexusCluster";

if (!uri || !uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
  throw new Error("Invalid MongoDB URI. Please check your .env file.");
}

const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
  if (!db) {
    try {
      await client.connect();
      console.log("Connected to MongoDB Atlas");
      db = client.db("ainexus");
    } catch (err) {
      console.error("Database connection error:", err.message);
      throw new Error("Failed to connect to MongoDB Atlas: " + err.message);
    }
  }
  return db;
}

process.on('SIGINT', async () => {
  console.log("Closing MongoDB connection...");
  await client.close();
  process.exit(0);
});

module.exports = { connectToDatabase };