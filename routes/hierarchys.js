var express = require('express');
var router = express.Router();
var Hierarchy=require('../models/hierarchy');
 
router.get('/country/:id?',function(req,res,next){
if(req.params.id){
 console.log(req.params.id);
 
Hierarchy.getCountryById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
Hierarchy.getAllCountry(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
    // console.log(rows[0].cname);
  res.json(rows);
  }
 
 });
 }
 });

router.post('/country',function(req,res,next){
Hierarchy.addCountry(req.body,function(err,result){
if(err)
{
res.json(err);
}
else{
res.json(result);//or return count for 1 &amp;amp;amp; 0
}
});
});

router.delete('/country/:id',function(req,res,next){
Hierarchy.deleteCountry(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });

router.put('/country/:id',function(req,res,next){
Hierarchy.updateCountry(req.params.id,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });

// states API start
router.get('/statesbycountry/:id?',function(req,res,next){
    if(req.params.id){
    console.log(req.params.id);

    Hierarchy.getStatesBycid(req.params.id,function(err,rows){

    if(err)
    {
    res.json(err);
    }
    else{
    res.json(rows);
    }
    });
    }
  });
router.get('/state/:id?',function(req,res,next){
if(req.params.id){
console.log(req.params.id);
 
Hierarchy.getStateById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
Hierarchy.getAllState(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
    console.log(rows);
  res.json(rows);
  }
 
 });
 }
 });

 router.post('/state',function(req,res,next){
 
Hierarchy.addStates(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/state/:id',function(req,res,next){
 
Hierarchy.deleteState(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
 router.put('/state/:id',function(req,res,next){
 
Hierarchy.updateState(req.params.id,req.body,function(err,rows){
 console.log(req.body.sname);
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });

 // states API end

 //region API start
router.get('/regionsbystate/:id?',function(req,res,next){
    if(req.params.id){
    console.log(req.params.id);

    Hierarchy.getRegionBysid(req.params.id,function(err,rows){

    if(err)
    {
    res.json(err);
    }
    else{
    res.json(rows);
    }
    });
    }
  });
 router.get('/region/:id?',function(req,res,next){

if(req.params.id){
 console.log(req.params.id);
 
Hierarchy.getRegionById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
Hierarchy.getAllRegion(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
    console.log(rows);
  res.json(rows);
  }
 
 });
 }
 });

 router.post('/region',function(req,res,next){
 
Hierarchy.addRegion(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/region/:id',function(req,res,next){
 
Hierarchy.deleteRegion(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
 router.put('/region/:id',function(req,res,next){
 
Hierarchy.updateRegion(req.params.id,req.body,function(err,rows){
 console.log(req.body.rname);
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 // region API end

  //route API start
  router.get('/routesbyregion/:id?',function(req,res,next){
    if(req.params.id){
    console.log(req.params.id);

    Hierarchy.getRouteByrid(req.params.id,function(err,rows){

    if(err)
    {
    res.json(err);
    }
    else{
    res.json(rows);
    }
    });
    }
  });

 router.get('/route/:id?',function(req,res,next){

if(req.params.id){
 console.log(req.params.id);
 
Hierarchy.getRouteById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
Hierarchy.getAllRoute(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
    console.log(rows);
  res.json(rows);
  }
 
 });
 }
 });

 router.post('/route',function(req,res,next){
 
Hierarchy.addRoute(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/route/:id',function(req,res,next){
 
Hierarchy.deleteRoute(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
 router.put('/route/:id',function(req,res,next){
 
Hierarchy.updateRoute(req.params.id,req.body,function(err,rows){
 console.log(req.body.rname);
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 // route API end

 //block API start
   router.get('/blocksbyroute/:id?',function(req,res,next){
    if(req.params.id){
    console.log(req.params.id);

    Hierarchy.getBlockByroid(req.params.id,function(err,rows){

    if(err)
    {
    res.json(err);
    }
    else{
    res.json(rows);
    }
    });
    }
  });

 router.get('/block/:id?',function(req,res,next){

if(req.params.id){
 console.log(req.params.id);
 
Hierarchy.getBlockById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
Hierarchy.getAllBlock(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
    console.log(rows);
  res.json(rows);
  }
 
 });
 }
 });

 router.post('/block',function(req,res,next){
 
Hierarchy.addBlock(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/block/:id',function(req,res,next){
 
Hierarchy.deleteBlock(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
 router.put('/block/:id',function(req,res,next){
 
Hierarchy.updateBlock(req.params.id,req.body,function(err,rows){
 console.log(req.body.rname);
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 // block API end

 //monoment API start
   
 router.get('/monoment/:id?',function(req,res,next){

if(req.params.id){
 console.log(req.params.id);
 
Hierarchy.getMonomentById(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
Hierarchy.getAllMonoment(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
    console.log(rows);
  res.json(rows);
  }
 
 });
 }
 });

 router.post('/monoment',function(req,res,next){
 
Hierarchy.addMonoment(req.body,function(err,result){
  console.log(req.body);
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(result);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });
 router.delete('/monoment/:id',function(req,res,next){
 
Hierarchy.deleteMonoment(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });

 router.put('/monoment/:id',function(req,res,next){
 
Hierarchy.updateMonomentdta(req.params.id,req.body,function(err,rows){
 console.log(req.body.rname);
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });

 router.put('/monomentref/:id',function(req,res,next){
 
Hierarchy.updateMonomentref(req.params.id,req.body,function(err,rows){
 // console.log(req.body.rname);
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });

 router.put('/monomentfid/:id',function(req,res,next){
 
Hierarchy.updateMonomentfid(req.params.id,req.body,function(err,rows){
 // console.log(req.body.rname);
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });

 router.post('/faceref',function(req,res,next){
 
Hierarchy.addFaceref(req.body,function(err,result){
  console.log(req.body);
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(result);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });

  router.put('/facedata/:id',function(req,res,next){
 
Hierarchy.createFacedata(req.params.id,req.body,function(err,rows){
 // console.log(req.body.rname);
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
  router.get('/facedatabymid/:id',function(req,res,next){
 
Hierarchy.getFacedatabymid(req.params.id,function(err,rows){
 // console.log(req.body.rname);
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
  
 // monument API end

 module.exports=router;