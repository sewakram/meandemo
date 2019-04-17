import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { NavbarserviceService } from '../../services/navbarservice.service';
import { DependencyService } from '../../services/dependency.service';
import * as $ from 'jquery';
declare function initAutocomplete(): any;
declare function editcmap(mydata): any;
declare function editsmap(mydata): any;
declare function statemap(cdata): any;
declare function regionmap(statedata): any;
declare function editrmap(statedata,mydata): any;
declare function routemap(statedata, rolatlng): any;
declare function blockmap(statedata, rlatlng): any;
declare function editro(statedata, mydata, rlatlng): any;
declare function editblock(statedata, mydata, rolatlng): any;


import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { MaploaderService } from '../../services/maploader.service';


// const statesWithFlags;



// import * from 'jquery';
@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class DependencyComponent implements OnInit {
  $: any;
  countrys: any;
  singlecountrys: any;
  states: any;
  singlestates:any;
  regions: any;
  singleregions:any;
  routes: any;
  singleroutes:any;

  blocks: any;
  singleblocks:any;

  data = {};
  modalReference: any;
  map: any;
  drawingManager: any;
  countrysa:any;
  statesbycid:any;
  regionsbysid:any;
  routesbyrid:any;
  blocksbyroid:any;
  countryid:any;
  stateid:any;
  statedata:any;
  regionid:any;
  regiondata:any;
  routeid:any;
  rlatlng:any;
  rolatlng:any;
  cdata:any;

  // search box starts
  public modelc: any;
  public models: any;
  public modelr: any;
  public modelro: any;
  public modelb: any;
  public model: any;
  public selectedItemcountry = false;
  public selectedItemstate = false;
  public selectedItemregion = false;
  public selectedItemroute = false;
  public selectedItemblock = false;

  // search box ends
  constructor(
    public navbarservice: NavbarserviceService,
    public dependencyservice: DependencyService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private router: Router
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    }
    
   
    opencountry(country) {
    this.modalReference = this.modalService.open(country);
    // console.log('sham', cid);
    // this.dependencyservice.getsinglecountry(cid).subscribe(data => {
    //   this.singlecountrys = data;
    //   console.log('response', data);
    // });
    initAutocomplete();
    // alert('holla');
  }

  openstate(state, cdata) {
    // console.log('countryid',cid);
    console.log('cdata', cdata);
    this.modalReference = this.modalService.open(state);
    // console.log('sham', cid);
    // this.dependencyservice.getsinglecountry(cid).subscribe(data => {
    //   this.singlecountrys = data;
    //   console.log('response', data);
    // });
    statemap(cdata);
    // alert('holla');
  }

  openregion(region, statedata) {
    this.modalReference = this.modalService.open(region,{ size: 'lg' });
    // console.log('sham', cid);
    // this.dependencyservice.getsinglecountry(cid).subscribe(data => {
    //   this.singlecountrys = data;
    //   console.log('response', data);
    // });
    regionmap(statedata);
    // alert('holla');
  }

  openeditr(regionedit, rid, statedata) {
  this.modalReference = this.modalService.open(regionedit,{ size: 'lg' });
  console.log('sham', rid);
  this.dependencyservice.getsingleregion(rid).subscribe(data => {
    this.singleregions = data;
    console.log('singleregions', this.singleregions);
    this.ngOnInit();
    editrmap(statedata, this.singleregions);
  });
  // initAutocomplete();
    
  // alert('holla');
  }

  opendeleter(regiondelete, rid) {
    this.modalReference = this.modalService.open(regiondelete);
    this.dependencyservice.getsingleregion(rid).subscribe(data => {
    this.singleregions = data;
    console.log('response', data);
    });
  }

  openroute(route, statedata,rlatlng) {
    this.modalReference = this.modalService.open(route,{ size: 'lg' });
    // console.log('sham', cid);
    // this.dependencyservice.getsinglecountry(cid).subscribe(data => {
    //   this.singlecountrys = data;
    //   console.log('response', data);
    // });
    routemap(statedata, rlatlng);
    // alert('holla');
  }

  openeditro(routeedit, roid, statedata,rlatlng) {
    this.modalReference = this.modalService.open(routeedit,{ size: 'lg' });
    console.log('sham', roid);
    this.dependencyservice.getsingleroute(roid).subscribe(data => {
      this.singleroutes = data;
      console.log('singleroutes', this.singleroutes);
      this.ngOnInit();
      editro(statedata, this.singleroutes,rlatlng);

    });
    // initAutocomplete();
    // alert('holla');
    }

    opendeletero(routedelete, roid) {
      this.modalReference = this.modalService.open(routedelete);
      this.dependencyservice.getsingleroute(roid).subscribe(data => {
      this.singleroutes = data;
      console.log('response', data);
      });
    }

  openblock(block, statedata,rolatlng) {
    this.modalReference = this.modalService.open(block,{ size: 'lg' });
    // console.log('sham', cid);
    // this.dependencyservice.getsinglecountry(cid).subscribe(data => {
    //   this.singlecountrys = data;
    //   console.log('response', data);
    // });
    blockmap(statedata,rolatlng);
    // alert('holla');
  }
  openeditb(blockedit, bid, statedata, rolatlng) {
    this.modalReference = this.modalService.open(blockedit,{ size: 'lg' });
    console.log('sham', bid);
    this.dependencyservice.getsingleblock(bid).subscribe(data => {
      this.singleblocks = data;
      console.log('singleroutes', this.singleroutes);
      this.ngOnInit();
      editblock(statedata, this.singleblocks, rolatlng);

    });
    // initAutocomplete();
    // alert('holla');
    }

  opendeleteb(blockdelete, bid) {
    this.modalReference = this.modalService.open(blockdelete);
    this.dependencyservice.getsingleblock(bid).subscribe(data => {
    this.singleblocks = data;
    console.log('response', data);
    });
  }

  opendeletec(countrydelete, cid) {
    this.modalReference = this.modalService.open(countrydelete);
    this.dependencyservice.getsinglecountry(cid).subscribe(data => {
    this.singlecountrys = data;
    console.log('response', data);
    });
  }

  openeditc(countryedit, cid) {
  this.modalReference = this.modalService.open(countryedit);
  console.log('sham', cid);
  this.dependencyservice.getsinglecountry(cid).subscribe(data => {
  this.singlecountrys = data;
    console.log('response', data);
    // $('#edit_country').attr('data-mapdatae', JSON.stringify(this.singlecountrys));
    editcmap(this.singlecountrys);
    
  });
   
  // initAutocomplete();
  // alert('holla');
  }

  openedits(stateedit, cid) {
  this.modalReference = this.modalService.open(stateedit);
  console.log('sham', cid);
  this.dependencyservice.getsinglestate(cid).subscribe(data => {
    this.singlestates = data;
    console.log('singlestates', this.singlestates);
    this.ngOnInit();
    editsmap(this.singlestates);
  });
  // initAutocomplete();
    
  // alert('holla');
  }

  opendeletes(statedelete, cid) {
    this.modalReference = this.modalService.open(statedelete);
    this.dependencyservice.getsinglestate(cid).subscribe(data => {
    this.singlestates = data;
    console.log('response', data);
    });
  }

  ngOnInit() {
    this.navbarservice.show();

    this.dependencyservice.getcountry().subscribe(data => {
      this.countrys = data;
      this.countrysa =  data;
      // this.statesWithFlags=(this.countrysa);
      // console.log('this.countrysa: ',JSON.stringify(this.countrysa));
      // statesWithFlags.push (JSON.stringify(this.countrysa));
      // this.statesWithFlags.forEach(function (value) {
      // console.log('loop',JSON.stringify(value));
      // console.log('value: ',value);
      // countrysa.push (value.cname);
      // }); 
      // console.log('countryarray',countrysa);
      console.log(this.countrys);
      // console.log('statesWithFlags',this.statesWithFlags);
    });

    this.dependencyservice.getstate().subscribe(data => {
      this.states = data;
      // this.statesbycid=data;

      //sevak
      console.log(this.states);
    });

    this.dependencyservice.getregion().subscribe(data => {
      this.regions = data;
      console.log(this.regions);
    });

    this.dependencyservice.getroute().subscribe(data => {
      this.routes = data;
      console.log(this.routes);
    });

    this.dependencyservice.getblock().subscribe(data => {
      this.blocks = data;
      console.log("blocks",this.blocks);
    });
    // initAutocomplete();
    // editcmap();
    // MaploaderService.load().then(() => {
    //   this.drawShape();
    // })
  }
 
  createCountry() {
    let mapdata=$('#pac-input').data('mapdata');
    console.log('tslat: ', JSON.stringify(mapdata[0].lat));
    console.log('tslng: ', JSON.stringify(mapdata[1].lng));
    console.log('createCountry: ',(( document.getElementById('pac-input'))as HTMLInputElement).value);
    // console.log(document.getElementById('pac-input').value);, lati: mapdata[0].lat, longi: mapdata[0].lat
    let realData =((document.getElementById('pac-input')) as HTMLInputElement).value;
    this.dependencyservice.createcountry({ cname: realData, lati: mapdata[0].lat,longi: mapdata[1].lng}).subscribe(formdata => {
      console.log('testdataid',formdata)
      this.dependencyservice.getsinglecountry(formdata.insertId).subscribe(data => {
      console.log('response', data[0]);
        let m = [...this.countrys, data[0]];
        this.countrys = m;
        // console.log('formdata: ',formdata);
        console.log('Countries: ', this.countrys);
      
    });
      
    });
    this.modalReference.close();
  }

  updateCountry(cid, data) {
    let mapdata = $('#edit_country').data('mapdata');
    // console.log(mapdata);
    console.log('tslat: ', JSON.stringify(mapdata[0].lat));
    console.log('tslng: ', JSON.stringify(mapdata[1].lng));
    console.log('createCountry: ', ((document.getElementById('edit_country')) as HTMLInputElement).value);
    let realData = ((document.getElementById('edit_country')) as HTMLInputElement).value;
    console.log('component', cid);
    console.log('requestdata', data, 'realData', realData);
    this.dependencyservice.updatecountry(cid, { cname: realData, lati: mapdata[0].lat, longi: mapdata[1].lng }).subscribe(formdata => {
      console.log('formdata: ', formdata);
      this.ngOnInit();
    });
    this.modalReference.close();
  }

  deleteCountry(cid) {
  console.log('componentd', cid);
  this.dependencyservice.deletecountry(cid).subscribe(formdata => {
    console.log('formdata: ', formdata);
    this.ngOnInit();
  });
  this.modalReference.close();
  }

  updateState(cid, data) {
    let mapdata = $('#edit-state').data('mapdata');
    // console.log(mapdata);
    console.log('tslat: ', JSON.stringify(mapdata[0].lat));
    console.log('tslng: ', JSON.stringify(mapdata[1].lng));
    console.log('createCountry: ', ((document.getElementById('edit-state')) as HTMLInputElement).value);
    let realData = ((document.getElementById('edit-state')) as HTMLInputElement).value;
    console.log('requestdata', data, 'realData', realData); //{ sname: realData, lati: mapdata[0].lat, longi: mapdata[1].lng }
    this.dependencyservice.updatestate(cid, { sname: realData, lati: mapdata[0].lat, longi: mapdata[1].lng }).subscribe(formdata => {
      console.log('formdata: ', formdata);
      this.dependencyservice.getsinglestate(cid).subscribe(singlestatedata => {
        this.statedata = singlestatedata;
        this.dependencyservice.getstatesbycid(singlestatedata[0].cid).subscribe(data => {
          this.statesbycid = data;
          // this.countryid = event.item.id;
          console.log('statesbycid', this.statesbycid);
        });
      });
      
      this.ngOnInit();
    });
    this.modalReference.close();
  }

  createState(cid) {
    let mapdata = $('#create-state').data('mapdata');
    // console.log(mapdata);
    // console.log('tslat: ', JSON.stringify(mapdata[0].lat));
    // console.log('tslng: ', JSON.stringify(mapdata[1].lng));
    console.log('createCountry: ', ((document.getElementById('create-state')) as HTMLInputElement).value);
    let realData = ((document.getElementById('create-state')) as HTMLInputElement).value;
    // data.push(cid);
    console.log('createStatedata',this.data);
    let mydata = { sname: realData, lati: mapdata[0].lat, longi: mapdata[1].lng, cid: cid };
    console.log('ma', mydata);
    // let ml={...this.data,cid:cid};
    // console.log('ml: ',ml);{ sname: realData, lati: mapdata[0].lat,longi: mapdata[1].lng,cid:cid}
    // this.data=
    this.dependencyservice.createstate(mydata).subscribe(formdata => {
      let m = [...this.states, formdata];
      this.states = m;
      //  console.log('formdata: ',formdata);
      console.log('State: ', this.statesbycid);
      this.dependencyservice.getstatesbycid(cid).subscribe(data => {
        this.statesbycid = data;
        // this.countryid = event.item.id;
        console.log('statesbycid', this.statesbycid);
      });
      this.ngOnInit();
    });
    
    this.modalReference.close();
  }

  deleteState(sid,cid) {
  console.log('componentd', sid);
  this.dependencyservice.deletestate(sid).subscribe(formdata => {
  console.log('formdata: ', formdata);
    this.dependencyservice.getstatesbycid(cid).subscribe(data => {
      this.statesbycid = data;
      // this.countryid = event.item.id;
      console.log('statesbycid', this.statesbycid);
    });
  this.ngOnInit();
  });
  this.getmysdata(cid);
  this.modalReference.close();
  }

getmysdata(id)
  {
    
      
      this.dependencyservice.getstatesbycid(id).subscribe(statesbyciddata => {
        this.statesbycid = statesbyciddata;
        
        console.log('statesbycid', this.statesbycid);
        });
      // updatedata[0]
    //  let index= this.regionsbysid.findIndex(element=>{
    //          return element.id==updatedata[0].id;
    //   });
    //   console.log('index: ',index);
    //   console.log('regionsbysid1: ',this.regionsbysid);

    //   this.regionsbysid[index]=updatedata[0];
    // // this.regionsbysid=[...this.regionsbysid, updatedata];
    //   console.log('regionsbysid2: ',this.regionsbysid);
    //  this.ngOnInit(); 
    
  }
  updateRegion(rid, data) {
    let mapdata = $('#edit_region').data('mapdata');
    let singledata = $('#edit_region').data('mydata');
    console.log('mapdata', mapdata);
    console.log('singledata',singledata);
    console.log('create_region: ', ((document.getElementById('edit_region')) as HTMLInputElement).value);
    let realData = ((document.getElementById('edit_region')) as HTMLInputElement).value;
    let mydata = { rname: realData, cid: singledata[0].cid, sid: singledata[0].sid, polydata: JSON.stringify(mapdata) };
    console.log('component', data,'rid',rid);
    this.dependencyservice.updateregion(rid, mydata).subscribe(formdata => {
      console.log('formdata: ', formdata);
      this.dependencyservice.getregionsbysid(singledata[0].sid).subscribe(data => {
        this.regionsbysid = data;
        // this.stateid = event.item.id;
        console.log('regionsbysid', this.regionsbysid);
      });
    });
    this.dependencyservice.getsingleregion(rid).subscribe(updatedata => {
      console.log('updatedata: ',updatedata);
      this.getmyrdata(updatedata[0].sid);
    });
    this.modalReference.close();
    
  }

  

  getmyrodata(id)
  {
    
      
      this.dependencyservice.getroutesbyrid(id).subscribe(routesbyriddata => {
        this.routesbyrid = routesbyriddata;
        
        console.log('routesbyrid', this.routesbyrid);
        });
      // updatedata[0]
    //  let index= this.regionsbysid.findIndex(element=>{
    //          return element.id==updatedata[0].id;
    //   });
    //   console.log('index: ',index);
    //   console.log('regionsbysid1: ',this.regionsbysid);

    //   this.regionsbysid[index]=updatedata[0];
    // // this.regionsbysid=[...this.regionsbysid, updatedata];
    //   console.log('regionsbysid2: ',this.regionsbysid);
    //  this.ngOnInit(); 
    
  }
  createRegion(sid) {
    let mapdata = $('#create_region').data('mapdata');
    let cid = $('#create_region').data('countrydata');
    console.log('create_region: ', ((document.getElementById('create_region')) as HTMLInputElement).value);
    let realData = ((document.getElementById('create_region')) as HTMLInputElement).value;
    let mydata = { rname: realData, cid: cid, sid: sid, polydata: JSON.stringify(mapdata) };
    console.log('ma', mydata);
    console.log(this.data);
    this.dependencyservice.createregion(mydata).subscribe(formdata => {
      let m = [...this.regionsbysid, formdata];
      this.regionsbysid = m;
      // console.log('formdata: ',formdata);
      console.log('countrys: ',this.regions);
      this.dependencyservice.getregionsbysid(sid).subscribe(data => {
        this.regionsbysid = data;
        // this.stateid = event.item.id;
        console.log('regionsbysid', this.regionsbysid);
      });
    });
    this.modalReference.close();
  }

  deleteRegion(rid,sid) {
    console.log('componentd', rid);
    this.dependencyservice.deleteregion(rid).subscribe(formdata => {
    console.log('formdata: ', formdata);
      this.dependencyservice.getregionsbysid(sid).subscribe(data => {
        this.regionsbysid = data;
        // this.stateid = event.item.id;
        console.log('regionsbysid', this.regionsbysid);
      });
    this.ngOnInit();
    });
    // this.dependencyservice.getsingleregion(rid).subscribe(updatedata => {
    //   console.log('updatedata: ',updatedata);
      this.getmyrdata(sid);
    // });
    this.modalReference.close();
    }
    getmyrdata(id)
    {
      
        
        this.dependencyservice.getregionsbysid(id).subscribe(regionsbysiddata => {
          this.regionsbysid = regionsbysiddata;
          
          console.log('regionsbysid', this.regionsbysid);
          });
        // updatedata[0]
      //  let index= this.regionsbysid.findIndex(element=>{
      //          return element.id==updatedata[0].id;
      //   });
      //   console.log('index: ',index);
      //   console.log('regionsbysid1: ',this.regionsbysid);
  
      //   this.regionsbysid[index]=updatedata[0];
      // // this.regionsbysid=[...this.regionsbysid, updatedata];
      //   console.log('regionsbysid2: ',this.regionsbysid);
      //  this.ngOnInit(); 
      
    }
  createRoute(rid) {
    let mapdata = $('#create_route').data('mapdata');
    let countrydata = $('#create_route').data('countrydata');
    console.log('create_route: ', ((document.getElementById('create_route')) as HTMLInputElement).value);
    let realData = ((document.getElementById('create_route')) as HTMLInputElement).value;
    let mydata = { rname: realData, cid: countrydata[0].cid, sid: countrydata[0].id,re_id: rid, polydata: JSON.stringify(mapdata) };
    console.log('ma', mydata);
    console.log(this.data);
    this.dependencyservice.createroute(mydata).subscribe(formdata => {
      let m = [...this.routesbyrid, formdata];
      this.routesbyrid = m;
      // console.log('formdata: ',formdata);
      console.log('Routes: ',this.routesbyrid);
      this.dependencyservice.getroutesbyrid(rid).subscribe(data => {
        this.routesbyrid = data;
        // this.regionid = event.item.id;

        console.log('routesbyrid', this.routesbyrid);
      });
    });
    this.modalReference.close();
  }

  updateRoute(roid, data) {
    let mapdata = $('#edit_route').data('mapdata');
    let singledata = $('#edit_route').data('mydata');
    console.log('mapdata', mapdata);
    console.log('singledata', singledata);
    console.log('create_region: ', ((document.getElementById('edit_route')) as HTMLInputElement).value);
    let realData = ((document.getElementById('edit_route')) as HTMLInputElement).value;
    let mydata = { rname: realData, cid: singledata[0].cid, sid: singledata[0].sid, re_id: singledata[0].re_id, polydata: JSON.stringify(mapdata) };
    console.log('component', data,'roid',roid);
    this.dependencyservice.updateroute(roid, mydata).subscribe(formdata => {
      console.log('formdata: ', formdata);
      this.dependencyservice.getroutesbyrid(singledata[0].re_id).subscribe(data => {
        this.routesbyrid = data;
        // this.regionid = event.item.id;

        console.log('routesbyrid', this.routesbyrid);
      });
    });
    this.dependencyservice.getsingleroute(roid).subscribe(updatedata => {
      console.log('updatedata: ',updatedata);
      this.getmyrodata(updatedata[0].re_id);
    });
    this.modalReference.close();
    
  }

  deleteRoute(roid,rid) {
    console.log('componentd', roid);
    this.dependencyservice.deleteroute(roid).subscribe(formdata => {
    console.log('formdata: ', formdata);
      this.dependencyservice.getroutesbyrid(rid).subscribe(data => {
        this.routesbyrid = data;
        // this.regionid = event.item.id;

        console.log('routesbyrid', this.routesbyrid);
      });
    this.ngOnInit();

    });
    // this.dependencyservice.getsingleroute(roid).subscribe(updatedata => {
    //   console.log('updatedata: ',updatedata);
      this.getmyrodata(rid);
    // });
    
    this.modalReference.close();
    }

  createBlock(roid) {
    let mapdata = $('#create_block').data('mapdata');
    let countrydata = $('#create_block').data('countrydata');
    let reid=$('#create_block').data('reid');
    console.log('create_block: ', ((document.getElementById('create_block')) as HTMLInputElement).value);
    let realData = ((document.getElementById('create_block')) as HTMLInputElement).value;
    let mydata = { bname: realData, cid: countrydata[0].cid, sid: countrydata[0].id, re_id: reid, ro_id: roid, polydata: JSON.stringify(mapdata) };
    console.log('ma', mydata);
    console.log(this.data);
    this.dependencyservice.createblock(mydata).subscribe(formdata => {
      let m = [...this.blocksbyroid, formdata];
      this.blocksbyroid = m;
      // console.log('formdata: ',formdata);
      console.log('blocksbyroid: ',this.blocksbyroid);
      this.dependencyservice.getblocksbyroid(roid).subscribe(data => {
        this.blocksbyroid = data;
        // this.routeid = event.item.id;

        console.log('blocksbyroid', this.blocksbyroid);
      });
    });
    this.modalReference.close();
  }
  
  updateBlock(bid, data) {
    let mapdata = $('#edit_block').data('mapdata');
    let singledata = $('#edit_block').data('mydata');
    let reid = $('#edit_block').data('reid');
    console.log('mapdata', mapdata);
    console.log('singledata', singledata);
    console.log('edit_block: ', ((document.getElementById('edit_block')) as HTMLInputElement).value);
    let realData = ((document.getElementById('edit_block')) as HTMLInputElement).value;
    let mydata = {
      bname: realData,
      cid: singledata[0].cid, 
      sid: singledata[0].sid,
      re_id: singledata[0].re_id,
      ro_id: singledata[0].ro_id,
      polydata: JSON.stringify(mapdata)
     };
    console.log('component', data,'bid',bid);
    this.dependencyservice.updateblock(bid, mydata).subscribe(formdata => {
      console.log('formdata: ', formdata);
      this.dependencyservice.getblocksbyroid(singledata[0].ro_id).subscribe(data => {
        this.blocksbyroid = data;
        // this.routeid = event.item.id;

        console.log('blocksbyroid', this.blocksbyroid);
      });
    });
    this.dependencyservice.getsingleblock(bid).subscribe(updatedata => {
      console.log('updatedata: ',updatedata);
      this.getmybdata(updatedata[0].ro_id);
    });
    this.modalReference.close();
    
  }

  deleteBlock(bid,roid) {
    console.log('componentd', bid);
    this.dependencyservice.deleteblock(bid).subscribe(formdata => {
    console.log('formdata: ', formdata);
      this.dependencyservice.getblocksbyroid(roid).subscribe(data => {
        this.blocksbyroid = data;
        // this.routeid = event.item.id;

        console.log('blocksbyroid', this.blocksbyroid);
      });
    this.ngOnInit();
    });
    // this.dependencyservice.getsingleroute(roid).subscribe(updatedata => {
    //   console.log('updatedata: ',updatedata);
      this.getmybdata(roid);
    // });
    this.modalReference.close();
  }

  getmybdata(id)
  {
    
      
      this.dependencyservice.getblocksbyroid(id).subscribe(blocksbyroiddata => {
        this.blocksbyroid = blocksbyroiddata;
        
        console.log('blocksbyroid', this.blocksbyroid);
        });
      // updatedata[0]
    //  let index= this.regionsbysid.findIndex(element=>{
    //          return element.id==updatedata[0].id;
    //   });
    //   console.log('index: ',index);
    //   console.log('regionsbysid1: ',this.regionsbysid);

    //   this.regionsbysid[index]=updatedata[0];
    // // this.regionsbysid=[...this.regionsbysid, updatedata];
    //   console.log('regionsbysid2: ',this.regionsbysid);
    //  this.ngOnInit(); 
    
  }
   onSelectc(event){
    console.log('onSelect: ',event);
    // alert(this.modelc);
    this.dependencyservice.getstatesbycid(event.item.id).subscribe(data => {
    this.statesbycid = data;
    this.countryid=event.item.id;
    console.log('statesbycid', this.statesbycid);
    });
// searchs();
  } 
  active(index){
    console.log('index: ',index);
    this.selectedItemblock = index;
  }

  onClickc(event, index){
    console.log('onSelect: ',event);
    console.log('indexC: ',index);
    // alert(this.modelc);
    this.selectedItemcountry = index;
    this.dependencyservice.getstatesbycid(event.id).subscribe(data => {
    this.statesbycid = data;
    this.countryid=event.id;
      this.cdata = event;
    console.log('statesbycid', this.statesbycid);
      this.stateid=undefined;
      this.regionid = undefined;
      this.routeid = undefined;
    
    });
    
// searchs();
  } 

  onSelects(event){
    console.log('onSelectstate: ',event);
    // alert(this.modelc);
    this.dependencyservice.getregionsbysid(event.item.id).subscribe(data => {
    this.regionsbysid = data;
    this.stateid=event.item.id;
    console.log('regionsbysid', this.regionsbysid);
    });

// searchs();
  }

  onClicks(event,index){
    this.selectedItemstate=index;
    console.log('indexS: ',index);
    console.log('onSelectstate: ',event);
    // alert(this.modelc);
    this.dependencyservice.getregionsbysid(event.id).subscribe(data => {
    this.regionsbysid = data;
    this.stateid=event.id;
      this.statedata = event;
    console.log('regionsbysid', this.regionsbysid);
      this.regionid=undefined;
    });
// searchs();
  }
 

   onSelectr(event){
    console.log('onSelectregion: ',event);
    // alert(this.modelc);
    this.dependencyservice.getroutesbyrid(event.item.id).subscribe(data => {
    this.routesbyrid = data;
    this.regionid=event.item.id;

    console.log('routesbyrid', this.routesbyrid);
    });
// searchs();
  }

  onClickr(event,index){
    this.selectedItemregion=index;
    console.log('indexRe: ',index);
    console.log('onSelectregion: ',event);
    // alert(this.modelc);
    this.dependencyservice.getroutesbyrid(event.id).subscribe(data => {
    this.routesbyrid = data;
    this.regionid=event.id;
      
      this.routeid=undefined;
    console.log('routesbyrid', this.routesbyrid);
    });
    this.rlatlng = JSON.parse(event.polydata);
    console.log('rlatlng:', this.rlatlng[0]);
    this.dependencyservice.getsinglestate(event.sid).subscribe(singlestatedata => {
      this.statedata = singlestatedata;
    });
// searchs();
  }

  onSelectro(event){
    console.log('onSelectroute: ',event.item.id);
    // alert(this.modelc);
    this.dependencyservice.getblocksbyroid(event.item.id).subscribe(data => {
    this.blocksbyroid = data;
    this.routeid=event.item.id;

    console.log('blocksbyroid', this.blocksbyroid);
    });
// searchs();
  }

  onClickro(event,index){
    this.selectedItemroute=index;
    console.log('indexRo: ',index);
    console.log('onSelectroute: ',event.id);
    // alert(this.modelc);
    this.dependencyservice.getblocksbyroid(event.id).subscribe(data => {
    this.blocksbyroid = data;
    this.routeid=event.id;
      this.rolatlng = JSON.parse(event.polydata);
      console.log('rolatlng:', this.rolatlng[0]);
    console.log('blocksbyroid', this.blocksbyroid);
    });
// searchs();
  }

  searchc = (text$: Observable<string>) =>

    text$.pipe(
      debounceTime(200),
      map(
        // console.log('statesWithFlagsmap',JSON.stringify(this.countrysa)),
        term => term === '' ? []
        : this.countrysa.filter(v => v.cname.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
        )
    )

  formatter = (x: {cname: string}) => x.cname;

  searchs = (text$: Observable<string>) =>

    text$.pipe(
      debounceTime(200),
      map(
        // console.log('statesbycidmap',JSON.stringify(this.statesbycid)),
        term => term === '' ? []
        : this.statesbycid.filter(v => v.sname.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
        )
    )

  formatters = (x: {sname: string}) => x.sname;

  searchr = (text$: Observable<string>) =>

    text$.pipe(
      debounceTime(200),
      map(
        // console.log('regionsbysiddmap',JSON.stringify(this.regionsbysid)),
        term => term === '' ? []
        : this.regionsbysid.filter(v => v.rname.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
        )
    )

  formatterr = (x: {rname: string}) => x.rname;

    searchro = (text$: Observable<string>) =>

    text$.pipe(
      debounceTime(200),
      map(
        // console.log('routesbyriddmap',JSON.stringify(this.routesbyrid)),
        term => term === '' ? []
        : this.routesbyrid.filter(v => v.rname.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
        )
    )

  formatterro = (x: {rname: string}) => x.rname;

  searchb = (text$: Observable<string>) =>

    text$.pipe(
      debounceTime(200),
      map(
        // console.log('blocksbyroidmap',JSON.stringify(this.blocksbyroid)),
        term => term === '' ? []
        : this.blocksbyroid.filter(v => v.bname.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
        )
    )

  formatterb = (x: {bname: string}) => x.bname;

  
}

