import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-manager',
  templateUrl: './friends-manager.component.html',
  styleUrls: ['./friends-manager.component.css']
})
export class FriendsManagerComponent implements OnInit {

  friends:string[];
  friend!:string;

  constructor() {
    this.friends=[
      "Vamsy","Suseela","Srinivas","Deepa"
    ];
   }

  ngOnInit(): void {
  }

  remove(f:string){
    let index = this.friends.findIndex(frd => frd===f);
    this.friends.splice(index,1);
  }

  add(){
    this.friends=[...this.friends,this.friend];
    this.friend="";
  }
}
