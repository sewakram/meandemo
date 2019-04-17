import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NavbarserviceService } from '../../services/navbarservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeIds: string[] = [];
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private navbarservice: NavbarserviceService
    ) { }

  ngOnInit() {
    this.activeIds = [];//All panels closed
    this.activeIds = ['toggle-2', 'toggle-4']; //panels 1 and 2 are open
  }

  onLogoutClick() {
      this.navbarservice.hide();
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;

  }
}
