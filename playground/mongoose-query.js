const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a7746aa298c718d4ce27464';

if ( !ObjectID.isValid(id) ) {
  console.log('Id not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('todo ', todo);
// }).catch((e) => console.log(e));

User.findById('5063114bd386d8fadbd6b004').then((user) => {
  if (!user) {
    console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
