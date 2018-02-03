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

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a72fe663a1abb55381735c3')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('users').findOneAndUpdate({
    _id: new ObjectID('5063114bd386d8fadbd6b004')
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
