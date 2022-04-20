import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { NgxDadataModule} from "@kolkov/ngx-dadata";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxDadataModule
  ]
})
export class PeopleModule { }
