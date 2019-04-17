const bcrypt = require('bcryptjs');
var db=require('../config/dbconnection');
var User={

	getRegioncount : function(callback){
		// console.log('hola');
		return db.query('Select count(id) as regioncount from region',callback);
	},
	getRoutecount : function(callback){
	return db.query("Select count(id) as routecount from route ",callback);	
	},

	getUserById : function(id, callback){
	// User.findById(id, callback);
	// console.log(id);
	return db.query("Select * from user WHERE id = ?",id,callback);
	},

	addUser:function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(newUser.password, salt, (err, hash) => {
		console.log(hash);
	  if(err) throw err;
	  newUser.password = hash;
	  // newUser.save(callback);
	  return db.query("INSERT INTO user set ? ",newUser,callback);
	});
	});
	},

	getUserByUsername:function(username, callback){
	// const query = {username: username}
	// db.findOne(query, callback);
	return db.query("Select * from user WHERE username =?",username,callback);
	},

	comparePassword:function(candidatePassword, hash, callback){
		console.log(candidatePassword+'and'+hash);
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
	if(err) throw err;
	callback(null, isMatch);
	});
	}
};

module.exports=User;