const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://guilherme:gui@cluster0.k3cpo7g.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("FruitDB");
    const fruits = database.collection("fruits");
    // create an array of documents to insert
    const docs = [
        {name: "strawberry", healthy: true, price: 0.21, stock: 300},
        {name: "watermelon", healthy: true, price: 7.98, stock: 40}
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
