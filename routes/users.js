const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/dbconnection');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  var newUser = {
    fname: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    // console.log(JSON.stringify(user[0].username));
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user[0].password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
       
        // const token = jwt.sign(JSON.stringify(user[0]), 'abcdefg',verifyOptions);
        const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: JSON.stringify(user[0].id)
        }, 'abcdefg');
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user[0].id,
            name: user[0].fname,
            username: user[0].username,
            email: user[0].email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/dashboard', passport.authenticate('jwt', {session:false}), (req, res, next) => {

User.getRegioncount(function(err,rows){
    if(err) throw err;
    // console.log('rows'+JSON.stringify(rows[0]))
    if(rows){
        localStorage.setItem("regioncount", JSON.stringify(rows[0].regioncount));
    }
});
  
User.getRoutecount(function(err,rows){
    if(err) throw err;
    console.log('rows'+JSON.stringify(rows[0]))
    if(rows){
        localStorage.setItem("routecount", JSON.stringify(rows[0].routecount));
    }
});

var mydata = {
    regioncount: localStorage.getItem("regioncount"),
    routecount: localStorage.getItem("routecount"),
  }
   // console.log('mydata'+JSON.stringify(mydata)); 
  res.json({user: req.user,data:mydata});
  // localStorage.clear();
  console.log('test'+localStorage.getItem("routecount"));
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
