import { Component, OnInit } from '@angular/core';
import { NavbarserviceService } from '../../services/navbarservice.service';
import { MonumentService} from '../../services/monument.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.component.html',
  styleUrls: ['./monuments.component.css']
})
export class MonumentsComponent implements OnInit {
  public listdata: any = [];
 public gal: any = [];
 modalReference: any;

  constructor(
    public navbarservice: NavbarserviceService,
    public monumentservice: MonumentService,
    private modalService: NgbModal
       ) { }

       ngOnInit() {
        this.navbarservice.show();
        this.loadList();
        // this.loadMonolist();
        // this.updateMonolist();
        }

        loadList() {
         this.monumentservice.listmonudataform().subscribe(
              Data => {
                console.log('ts');
                this.listdata = Data;
                for(let i=0;i<Data.length;i++){
                  // this.gal=Data[i].gallery;
                  console.log(Data[i].gallery);
                  this.gal = Data[i].gallery.split(",");
                  console.log("this.gal")
                }
                console.log('Data',Data);
              }
          );
        }
        openview(view){
          this.modalReference = this.modalService.open(view, { size: 'lg' });
        }
        openmonoedit(monoedit){
          this.modalReference = this.modalService.open(monoedit);
        }
        openmonodelete(monodelete){
          this.modalReference = this.modalService.open(monodelete);
        }
}
