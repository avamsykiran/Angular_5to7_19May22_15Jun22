import { Component, OnInit } from '@angular/core';
import { AccountHolder } from '../account-holder';
import { AccountHolderService } from '../account-holder.service';

@Component({
  selector: 'app-account-holders',
  templateUrl: './account-holders.component.html',
  styleUrls: ['./account-holders.component.css']
})
export class AccountHoldersComponent implements OnInit {

  ahs!:AccountHolder[];
  errMsg!:string;

  constructor(private ahService:AccountHolderService) { }

  ngOnInit(): void {
    this.ahService.getAll().subscribe({
      next: data => this.ahs=data,
      error: err => {
        console.error(err);
        this.errMsg="Unable to Load";
      }
    });
  }

}
