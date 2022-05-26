import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;

  logo:string;

  logos:string[];
  logoIndex:number;
  logoWidth:number;

  cf:boolean;
  bf:boolean;
  rf:boolean;

  constructor(){
    this.title="Angular Project ONE"
    this.logos=[
      "assets/images/i1.png",
      "assets/images/i2.png",
      "assets/images/i3.jpg",
      "assets/images/i4.jpg",
      "assets/images/i5.jpg"
    ];
    this.logoIndex=0;
    this.logo=this.logos[this.logoIndex];
    this.logoWidth=200;
    this.cf=false;
    this.bf=true;
    this.rf=false;
  }

  toggleLogo(){
    this.logoIndex=(++this.logoIndex)%this.logos.length;
    this.logo=this.logos[this.logoIndex];
  }
}
