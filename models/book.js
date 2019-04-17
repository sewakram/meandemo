var db=require('../config/dbconnection');
// var db=require('../app.js');

var Book={
 
getAllTasks:function(callback){
	// console.log("hi");
 
return db.query("Select * from book",callback);
 
},
 getTaskById:function(id,callback){
 
return db.query("select * from book where id=?",[id],callback);
 },
 addTask:function(Book,callback){
 return db.query("Insert into book values(?,?,?,?)",[Book.id,Book.title,Book.author,Book.descr],callback);
 },
 deleteTask:function(id,callback){
  return db.query("delete from book where id=?",[id],callback);
 },
 updateTask:function(id,Book,callback){
  return db.query("update book set title=?,author=?,descr=? where id=?",[Book.title,Book.author,Book.descr,id],callback);
 }
 
};

module.exports=Book;