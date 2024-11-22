const { connectToDatabase } = require("./db");
require("dotenv").config();

async function insertEmail(email) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("newsletter");

    // Check if email already exists
    const existingEmail = await collection.findOne({ email });
    if (existingEmail) {
      return { message: "You're already registred in our Newsletter.", status: 400 }; 
    }

    // Insert the email if it doesn't exist
    const result = await collection.insertOne({
      email,
      subscribedAt: new Date(),
    });

    return { message: "✅ Email subscribed successfully!", status: 200, insertedId: result.insertedId };
  } catch (err) {
    console.error("Error in insertEmail function:", err.message);
    throw new Error("Database insertion failed");
  }
}

module.exports = { insertEmail };
