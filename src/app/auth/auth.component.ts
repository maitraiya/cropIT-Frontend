import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById('banner').scrollIntoView({behavior: 'smooth'});
  }
  toServices(){
    document.getElementById('services').scrollIntoView({behavior: 'smooth'});
  }
  toAbout(){
    document.getElementById('about-us').scrollIntoView({behavior: 'smooth'});
    //document.getElementById('testimonials').scrollIntoView({behavior: 'smooth'});
  }
  toContact(){
    document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
  }
}
