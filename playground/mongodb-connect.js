const MongoClient = require('mongodb').MongoClient;

const user = { name: 'Andrew', age: 24 };
const {name} = user;

console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if ( err ) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if ( err ) {
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('users').insertOne({
  //   name: 'Euclides Joao',
  //   age: 24,
  //   location: 'Suiderhof alwyns street'
  // }, (err, result) => {
  //   if ( err ) {
  //     return console.log('Unable to insert user');
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
