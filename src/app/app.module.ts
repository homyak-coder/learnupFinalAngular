import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PeopleComponent } from './ui/people/components/people.component';
import {FormsModule} from "@angular/forms";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {HttpClientModule} from "@angular/common/http";
import { NgxDadataModule} from "@kolkov/ngx-dadata";

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollingModule,
    HttpClientModule,
    NgxDadataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
