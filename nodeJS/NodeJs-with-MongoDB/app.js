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
      { name: "apple", healthy: true, price: 1.50, stock: 20 },
      { name: "banana", healthy: true, price: 2.25, stock: 50 },
      {name:"orange", healthy:true, price: 4.56, stock: 26}
    ];
    // thiss addi option preventtional documents from being inserted if one fails
    const options = { ordered: true };
    const result = await fruits.insertMany(docs, options);
    console.log(`Connected successfully to server and ${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
