import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { TxnsComponent } from './txns/txns.component';
import { TxnFormComponent } from './txn-form/txn-form.component';

@NgModule({
  declarations: [
    TxnsComponent,
    TxnFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    TxnsComponent,
    TxnFormComponent
  ]
})
export class TxnsModule { }
