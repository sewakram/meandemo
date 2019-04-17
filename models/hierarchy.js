var db=require('../config/dbconnection');
// var db=require('../app.js');

var Hierarchy={
 	// get Country data start
	getAllCountry:function(callback){

	return db.query("Select * from country",callback);

	},
	getCountryById:function(id,callback){
	console.log("hi");
	return db.query("select * from country where id=?",[id],callback);
	},
	addCountry:function(country,callback){
	return db.query("Insert into country(cname,lati,longi) values(?,?,?)",[country.cname,country.lati,country.longi],callback);
	},
	deleteCountry:function(id,callback){
	return db.query("delete from country where id=?",[id],callback);
	},
	updateCountry:function(id,country,callback){
	return db.query("update country set cname=?,lati=?,longi=? where id=?",[country.cname,country.lati,country.longi,id],callback);
	},
 	// get Country data end

 	// get State data start
 	getAllState:function(callback){

	return db.query("Select * from states",callback);

	},
	getStatesBycid:function(id,callback){
	return db.query("select * from states where cid=?",[id],callback);
	},
	getStateById:function(id,callback){
	return db.query("select * from states where id=?",[id],callback);
	},
	addStates:function(data,callback){
	return db.query("Insert into states(sname,lati,longi,cid) values(?,?,?,?)",[data.sname,data.lati,data.longi,data.cid],callback);
	},
	deleteState:function(id,callback){
	return db.query("delete from states where id=?",[id],callback);
	},
	updateState:function(id,data,callback){
	return db.query("update states set sname=?,lati=?,longi=? where id=?",[data.sname,data.lati,data.longi,id],callback);
	},
	// get Region data start
 	getAllRegion:function(callback){

	return db.query("Select * from region",callback);

	},
	getRegionBysid:function(id,callback){
	return db.query("select * from region where sid=?",[id],callback);
	},
	getRegionById:function(id,callback){
	return db.query("select * from region where id=?",[id],callback);
	},
	addRegion:function(data,callback){
	return db.query("Insert into region(rname,cid,sid,polydata) values(?,?,?,?)",[data.rname,data.cid,data.sid,data.polydata],callback);
	},
	deleteRegion:function(id,callback){
	return db.query("delete from region where id=?",[id],callback);
	},
	updateRegion:function(id,data,callback){
	return db.query("update region set rname=?,cid=?,sid=?,polydata=? where id=?",[data.rname,data.cid,data.sid,data.polydata,id],callback);
	},

	// get Route data start
 	getAllRoute:function(callback){

	return db.query("Select * from route",callback);

	},
	getRouteByrid:function(id,callback){
	return db.query("select * from route where re_id=?",[id],callback);
	},
	getRouteById:function(id,callback){
	return db.query("select * from route where id=?",[id],callback);
	},
	addRoute:function(data,callback){
	return db.query("Insert into route(rname,cid,sid,re_id,polydata) values(?,?,?,?,?)",[data.rname,data.cid,data.sid,data.re_id,data.polydata],callback);
	},
	deleteRoute:function(id,callback){
	return db.query("delete from route where id=?",[id],callback);
	},
	updateRoute:function(id,data,callback){
	return db.query("update route set rname=?,cid=?,sid=?,re_id=?,polydata=? where id=?",[data.rname,data.cid,data.sid,data.re_id,data.polydata,id],callback);
	},

	// get Block data start
 	getAllBlock:function(callback){

	return db.query("Select * from block",callback);

	},
	getBlockByroid:function(id,callback){
	return db.query("select * from block where ro_id=?",[id],callback);
	},
	getBlockById:function(id,callback){
	return db.query("select * from block where id=?",[id],callback);
	},
	addBlock:function(data,callback){
	return db.query("Insert into block(bname,cid,sid,re_id,ro_id,polydata) values(?,?,?,?,?,?)",[data.bname,data.cid,data.sid,data.re_id,data.ro_id,data.polydata],callback);
	},
	deleteBlock:function(id,callback){
	return db.query("delete from block where id=?",[id],callback);
	},
	updateBlock:function(id,data,callback){
	return db.query("update block set bname=?,cid=?,sid=?,re_id=?,ro_id=?,polydata=? where id=?",[data.bname,data.cid,data.sid,data.re_id,data.ro_id,data.polydata,id],callback);
	},

		// get Monoment data start
 	getAllMonoment:function(callback){
	return db.query("Select * from monoments",callback);
	},
	getMonomentById:function(id,callback){
	return db.query("select * from monoments where id=?",[id],callback);
	},
	addMonoment:function(data,callback){
	return db.query("Insert into monoments(gallery) values(?)",[data.gallery],callback);
	
	// return db.query("Insert into monoments(lat,lng,location,status,ass_block,type,provider,notes,reference) values(?,?,?,?,?,?,?,?,?)",[data.lat,data.lng,data.location,data.status,data.ass_block,data.type,data.provider,data.notes,data.reference],callback);
	},
	deleteMonoment:function(id,callback){
	return db.query("delete from monoments where id=?",[id],callback);
	},
	updateMonomentdta:function(id,data,callback){
	return db.query("update monoments set lat=?,lng=?,location=?,status=?,ass_block=?,type=?,provider=?,notes=? where id=?",[data.lat,data.lng,data.location,data.status,data.ass_block,data.type,data.provider,data.notes,id],callback);
	},

	updateMonomentref:function(id,data,callback){
		console.log(data,'hhhhhhhhhhhhhhhh',id);
	return db.query("update monoments set reference=? where id=?",[data.reference,id],callback);
	},
	updateMonomentfid:function(id,data,callback){
		console.log(data,'hhhhhhhhhhhhhhhh',id);
	return db.query("update monoments set faceid=? where id=?",[data.faceid,id],callback);
	},

	createFacedata:function(id,data,callback){
		console.log(data,'hhhhhhhhhhhhhhhh',id);
	return db.query("update manage_faces set refname=?,level=? where id=?",[data.refname,data.level,id],callback);
	},
	getFacedatabymid:function(id,callback){
	return db.query("select * from manage_faces where mid=?",[id],callback);
	},

	addFaceref:function(data,callback){
	return db.query("Insert into manage_faces(fref_image,mid) values(?,?)",[data.freference,data.mid],callback);
	
	// return db.query("Insert into monoments(lat,lng,location,status,ass_block,type,provider,notes,reference) values(?,?,?,?,?,?,?,?,?)",[data.lat,data.lng,data.location,data.status,data.ass_block,data.type,data.provider,data.notes,data.reference],callback);
	},
 	
};

module.exports=Hierarchy;