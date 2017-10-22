const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||"mongodb://admin:admin@ds037195.mlab.com:37195/heroku_84dfs1jn" || "mongodb://localhost/vodLegends" 
  {
    useMongoClient: true
  }
);

///---------------------------Student Test Seed----------------------------------///


  const studentSeed = [
  {
    firstName: "James",
    lastName: "DeChavez",
    lolUserName: "azianpinoy",
    role: "support",
    bio: "The most awesome rookie ever",
    password: "rook1234"
  }
];
console.log(studentSeed);
db.Students
  .remove({})
  .then(() => db.Students.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
