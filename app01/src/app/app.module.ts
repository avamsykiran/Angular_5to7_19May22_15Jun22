import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FriendsManagerComponent } from './friends-manager/friends-manager.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { IntoWordsPipe } from './into-words.pipe';
import { ServicesDemoComponent } from './services-demo/services-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsManagerComponent,
    PipesDemoComponent,
    IntoWordsPipe,
    ServicesDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
