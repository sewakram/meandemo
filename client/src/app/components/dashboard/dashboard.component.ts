import { Component, OnInit } from '@angular/core';
import { NavbarserviceService } from '../../services/navbarservice.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mydata:Object;
  constructor(
 public navbarservice: NavbarserviceService,
 private authService:AuthService,
 private router:Router
  	) { }

  ngOnInit() {
	this.navbarservice.show();

	this.navbarservice.getDashboard().subscribe(data => {
	this.mydata = data.data;
	console.log(this.mydata);
	});

  }

}
