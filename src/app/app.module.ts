import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from 'src/server/server.component';
import { SubserverComponent } from './subserver/subserver.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SubserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
