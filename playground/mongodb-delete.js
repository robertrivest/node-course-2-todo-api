//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Server');
    }
    console.log('Connected to Mongo DB Server')
    //delete Many
    // db.collection('Users').deleteMany({name: 'Robert Rivest'}).then((result) => {
    // console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    var obj = new ObjectID('5a1f500ccb8c80356cc0774a');
    db.collection('Users').findOneAndDelete({ _id: obj }).then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    });
    //  db.close();

    // look for duplicates
    // delete many
    // delete doc by ID

});