const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("FruitDB");
    const fruits = database.collection("fruits");
    // create an array of documents to insert
    const docs = [
      { _id:"3", name: "strawberry berry", healthy: true, price: 0.21, stock: 300 },
      { _id: "4", name: "watermelon melon", healthy: true, price: 7.98, stock: 40 },
    ];
    // thiss addi option preventtional documents from being inserted if one fails
    const options = { ordered: true };
    const result = await fruits.insertMany(docs, options);
    console.log(
      `Connected successfully to server and ${result.insertedCount} documents were inserted`
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
