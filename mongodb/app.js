const { MongoClient } = require("mongodb");

uri = 'mongodb://localhost:27017/smritidb';

client = new MongoClient(uri);

client.connect();