const { connectToDatabase } = require("./db");
require("dotenv").config();

async function insertJsonData() {
    const jsonData = [
    ];
  
    try {
      const db = await connectToDatabase();
      const collection = db.collection("ai-tools"); // The collection name (ai-tools in this case)
      const result = await collection.insertMany(jsonData); // MongoDB will generate _id automatically
  
      console.log(`${result.insertedCount} documents were inserted.`);
      return result;
    } catch (err) {
      console.error("Error inserting data:", err.message);
      throw new Error("Failed to insert data");
    }
  }
  
  module.exports = { insertJsonData };
  