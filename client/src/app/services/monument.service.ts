import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NavbarserviceService } from './navbarservice.service';

@Injectable({
  providedIn: 'root'
})
export class MonumentService {
  
  constructor(private http: Http, public navbarservice: NavbarserviceService) { }
  // postFile(fileToUpload: File, fileName: string): Observable<any> {
  //   this.imageListCache = [];
  //   const idtoken = this.getCachedUser('idtoken');
  //   return this.http.post(this.serviceURL, fileToUpload,
  //     {
  //       headers: { 'filename': fileName, 'enctype': 'multipart/form-data', 'idtoken': idtoken }
  //       , reportProgress: true
  //     });
  // }
  uploadgallery(formdata, headers) {
    // console.log('data: ', data);
    
    // let headers = new Headers();
    // this.navbarservice.loadToken();
    // headers.append('Authorization', this.navbarservice.authToken);
    // headers.append('Content-Type', 'application/json');
    // headers.append('enctype', 'multipart/form-data');
    // const formData: FormData = new FormData();
    // formData.append('fileKey', fileToUpload, fileToUpload.name);
    // const headers = new Headers();
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    return this.http.post('http://localhost:3000/uploader/gallery', formdata, { headers: headers })
      .map(res => res.json());
  }

  uploadrefgallery(formdata, headers) {
   
    return this.http.post('http://localhost:3000/uploader/refgallery', formdata, { headers: headers })
      .map(res => res.json());
  }
  

  createmonument(data) {
    let headers = new Headers();
    this.navbarservice.loadToken();
    headers.append('Authorization', this.navbarservice.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/hierarchy/monoment', data, { headers: headers })
      .map(res => res.json());
  }

  createmonuref(mid,data) {
    let headers = new Headers();
    this.navbarservice.loadToken();
    headers.append('Authorization', this.navbarservice.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/hierarchy/monomentref/'+ mid, data, { headers: headers })
      .map(res => res.json());
  }


  createfaceref(data) {
    let headers = new Headers();
    this.navbarservice.loadToken();
    headers.append('Authorization', this.navbarservice.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/hierarchy/faceref/',data, { headers: headers })
      .map(res => res.json());
  }

  updatemonudata(mid,data){
    let headers = new Headers();
    this.navbarservice.loadToken();
    headers.append('Authorization', this.navbarservice.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/hierarchy/monoment/'+ mid, data, { headers: headers })
      .map(res => res.json());
  }
  updatemonumentfid(mid,data){
    let headers = new Headers();
    this.navbarservice.loadToken();
    headers.append('Authorization', this.navbarservice.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/hierarchy/monomentfid/'+ mid, data, { headers: headers })
      .map(res => res.json());
  }

  updatefacedata(fid,data){
    let headers = new Headers();
    this.navbarservice.loadToken();
    headers.append('Authorization', this.navbarservice.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/hierarchy/facedata/'+ fid, data, { headers: headers })
      .map(res => res.json());
  }

  getfacedatabymid(mid){
    let headers = new Headers();
    this.navbarservice.loadToken();
    headers.append('Authorization', this.navbarservice.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/hierarchy/facedatabymid/' + mid,{ headers: headers })
      .map(res => res.json());
  }

  listmonudataform() {
    console.log('service');
    const headers = new Headers();
    this.navbarservice.loadToken();
    headers.append('Authorization', this.navbarservice.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/hierarchy/monoment/', {headers: headers})
      .map(res => res.json());
      // console.log(res);
}
}
