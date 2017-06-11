const knex = require('./knex');
const objection = require('objection');

const Date = require('../models/date');
const Sick = require('../models/sick');
const Step = require('../models/step');
const User_weather = require('../models/user_weather');
const User = require('../models/user');

module.exports = {

  // getUser: function(email) {
  //   return knex('user')
  //     .where('email', email)
  //     .first()
  //     .catch(err => {
  //       // var response =  {
  //       //   status: "failure",
  //       //   message: "Email Already Exists"
  //       // };
  //       // return response;
  //       console.log('Email not found');
  //     });
  // },
  getUser: function(id) {
    return knex('user')
      .where('id', id)
      .first()
      .catch(err => {
        console.log('user not found');
      });
  },

  getDates: function(id){
  return User
    .query()
    .where('id', '=', id)
    .eager('[date.[user_weather.[weather], sick, step]]');
    // .eager('[group.[friend], item_status.[friend], item_sell]');

  },

  getUserStuff: function(user_id){
  return Sick
    .query()
    .where('user_id', '=', 1);
    // .eager('user.[date]');
    // .eager('[group.[friend], item_status.[friend], item_sell]');

  }

};

function throwNotFound() {
  var error = new Error();
  error.statusCode = 404;
  throw error;
}
