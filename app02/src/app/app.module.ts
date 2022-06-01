import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatementComponent } from './statement/statement.component';
import { TxnDetailsComponent } from './txn-details/txn-details.component';
import { TxnFormComponent } from './txn-form/txn-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StatementComponent,
    TxnDetailsComponent,
    TxnFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
