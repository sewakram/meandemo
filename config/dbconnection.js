var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 port: 3307,
 database:'adsmart_dev',
 secret: 'yoursecret'
 });
 module.exports=connection;