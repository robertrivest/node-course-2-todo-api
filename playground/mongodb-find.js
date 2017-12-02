//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Server');
    }
    console.log('Connected to Mongo DB Server')
    db.collection('Users').find({
        name: 'Robert Rivest'

    }).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        if (err) {
            console.log("Unable to fetch to do's", err);
        }
    });

    db.collection('Users').find({
        name: 'Robert Rivest'
    }).count().then((count) => {

        console.log("Todos");
        console.log(`Total Count: ${count}`);

    }, (err) => {
        if (err) {
            console.log("Unable to fetch to do's", err);
        }
    });
    //  db.close();
});