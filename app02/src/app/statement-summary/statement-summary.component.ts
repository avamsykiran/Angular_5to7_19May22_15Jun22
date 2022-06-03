import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement-summary',
  templateUrl: './statement-summary.component.html',
  styleUrls: ['./statement-summary.component.css']
})
export class StatementSummaryComponent implements OnInit {

  @Input()
  creditAmount!:number;

  @Input()
  debitAmount!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
