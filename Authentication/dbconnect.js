const mongoose = require('mongoose');

const uri = "mongodb://2024466chheal_db_user:user456@ac-0lrfomq-shard-00-00.oviwfr9.mongodb.net:27017,ac-0lrfomq-shard-00-01.oviwfr9.mongodb.net:27017,ac-0lrfomq-shard-00-02.oviwfr9.mongodb.net:27017/registrationlogin?ssl=true&replicaSet=atlas-tk1xb4-shard-0&authSource=admin&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}
run().catch(console.dir);

