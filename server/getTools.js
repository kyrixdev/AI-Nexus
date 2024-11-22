const { connectToDatabase } = require("./db");

async function getJsonData() {
    try {
      const db = await connectToDatabase();
      const collection = db.collection("ai-tools");
  
      const data = await collection.find().toArray();

      return data;
    } catch (err) {
      console.error("Error retrieving data:", err.message);
      throw new Error("Failed to retrieve data");
    }
  }
  
  module.exports = { getJsonData };