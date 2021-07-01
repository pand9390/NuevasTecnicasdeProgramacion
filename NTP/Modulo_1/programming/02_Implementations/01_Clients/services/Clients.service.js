
const { MongoConnection } = require("../lib/Mongo");

//Colection
const COLLECTION = "clients"
const findUsers = () => 
new Promise(async (resolve, reject)=>{
    try {
        // inicializar mongo client para que em retorne la db
        const DB = await MongoConnection()
        const clients = DB.collection(COLLECTION)
        const clientsList = await clients.find({}).toArray()
        resolve(clientsList)
        
    } catch (error) {
        reject(error)
    }
});

module.exports = {
    findUsers,
}