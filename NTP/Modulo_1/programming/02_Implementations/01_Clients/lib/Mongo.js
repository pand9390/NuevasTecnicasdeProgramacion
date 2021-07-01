const { MongoClient } = require('mongodb');

const DB_NAME = "dbCluster"
const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@dbcluster.77irh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

var MongoConnection = () => 
new Promise(async (resolve, reject) => {
    try {
        let client = new MongoClient(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        await client.connect()
        resolve(client.db(DB_NAME))
    } catch (error) {
        reject(error)
    }
});

module.exports.MongoConnection = MongoConnection;