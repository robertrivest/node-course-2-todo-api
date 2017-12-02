const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
const {ObjectID} = require('mongodb');

 //var id = '5a21389ac362ed195c2fef0f';

// if(!ObjectID.isValid(id)){
//     console.log('ID Not Valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("ID not Found");
//     }
//     console.log('todo by ID', todo);
// }).catch((e) => console.log(e));
var id = '5a21389ac362ed195c2fef0f';
User.findById(id).then((user) =>{
    if(!user) {
        return console.log('User Not Found');
    }
    console.log('User by id',(JSON.stringify(user,undefined,2)));
},(e) => {
    console.log('ID not Found straight error');
}).catch((e) => console.log(e));