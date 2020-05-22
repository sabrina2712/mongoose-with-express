const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
   name: {
     type: String
   },
   lastName: {
     type: String
   },
   age: {
     type: Number,
     min: 18
   },
   address: {
     type: String
   },
   street: {
     type: String
   },
   number: {
     type: Number
   },
   city: {
     type: {
       String
     },
     zip: {
      type: Number
     },
     comments: [{body: String, title: String, time: Date}]
   }
  });

  const Users = mongoose.model("Users", usersSchema);

  module.exports = Users;