import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountHolderService } from '../account-holder.service';

@Component({
  selector: 'app-account-holder-form',
  templateUrl: './account-holder-form.component.html',
  styleUrls: ['./account-holder-form.component.css']
})
export class AccountHolderFormComponent implements OnInit {

  idFC: FormControl;
  fullNameFC: FormControl;
  emailIdFC: FormControl;
  cbFC: FormControl;

  ahForm: FormGroup;

  errMsg!:string;

  constructor(private ahService:AccountHolderService,private router:Router) {
    this.idFC=new FormControl(0);
    this.fullNameFC=new FormControl('',[Validators.required]);
    this.emailIdFC=new FormControl('',[Validators.required,Validators.email]);
    this.cbFC=new FormControl(0);

    this.ahForm=new FormGroup({
      ahId:this.idFC,
      fullName:this.fullNameFC,
      emailId:this.emailIdFC,
      currentBalance:this.cbFC
    });
  }

  ngOnInit(): void {
  }

  formSubmitted(){
    this.ahService.add(this.ahForm.value).subscribe({
      next: data => this.router.navigateByUrl("/accounts"),
      error: err=> {
        console.error(err);
        this.errMsg="Unable to save"
      }
    });
  }
}
