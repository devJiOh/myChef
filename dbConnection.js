const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://user:coly8p6qg2gKugcr@grocerydb-lds9j.mongodb.net/test?retryWrites=true&w=majority";

async function main() {
    const uri = "mongodb+srv://user:coly8p6qg2gKugcr@grocerydb-lds9j.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
