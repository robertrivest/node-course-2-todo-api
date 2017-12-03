const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

Todo.findOneAndRemove({_id:'5a242b89c75c82469eb8b48c'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a242b89c75c82469eb8b48c').then((todo) => {
console.log(todo);
});