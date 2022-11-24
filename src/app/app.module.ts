import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FbComponentComponent } from './fb-component/fb-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FbComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@NgModule({
  declarations:[],
  imports:[],
  providers:[],
  bootstrap:[]
  })
export class AppModule { }



