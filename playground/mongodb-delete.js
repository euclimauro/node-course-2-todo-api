//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const user = { name: 'Andrew', age: 24 };
const {name} = user;

console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if ( err ) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany( {text: 'Eat lunch'} ).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne( {text: 'Eat lunch'} ).then((result) => {
  //   console.log(result);
  // });

  // db.collection('users').deleteMany({ name: 'Andrew' });

  db.collection('users').findOneAndDelete({
    _id: new ObjectID('5a6f747543a5bb1f9c47a143')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
