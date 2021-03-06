//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Server');
    }
    console.log('Connected to Mongo DB Server')

    db.collection('Users').findOneAndUpdate({
        name: 'John Doe'
    }, {
            $set: {
                name: 'Robert Rivest'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

});