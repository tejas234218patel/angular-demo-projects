import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // here both RouterLink,RouterLinkActive are required. RouterLinkActive is to add active class
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  // time stamp: 4:00:00
  // Hyper-media web apps: https://www.youtube.com/watch?v=cpzowDDJj24
  // https://www.youtube.com/watch?v=2Yq3za3qIp0&t=8468s
  // https://www.youtube.com/playlist?list=PLqVWQ84m1Q7FOAAtN2Rdch9-CSytPtF_U
  // https://www.youtube.com/watch?v=tAKJV060Sxw
  // https://firebase.google.com/docs/auth/web/manage-users
  // https://console.firebase.google.com/u/0/project/codebin-ng-1a1d0/authentication/users
  constructor(private http: HttpClient, private authService: AuthService, private route:Router) {    
  }
  ngOnInit(): void {
    this.http.get('resources/en.json').subscribe((data) => {
      this.resources = data;
    });
  }
  resources: any;

  logoutUser(){
    this.authService.signOutUser();
    this.route.navigate(['/login']);
  }
  isUserAuthenticated(){
   return this.authService.isAuthenticated();
  }
}
