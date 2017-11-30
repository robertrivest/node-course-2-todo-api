//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Server');
    }
    console.log('Connected to Mongo DB Server')
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: true
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert ToDo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //     db.close();
    // });

    // db.collection('Users').insertOne({
    //     name: 'Robert Rivest',
    //     age: 49,
    //     location: 'Wallington'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert User", err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
         db.close();
    // });
});