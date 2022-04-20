import { Component, OnInit } from '@angular/core';
import {Human} from "../../../human";
import {DadataConfig,  DadataType} from '@kolkov/ngx-dadata';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public human: Human = {
    FIO: 'Холодов Даниил Александрович',
    address: 'город N'
  }


  configAddress: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.address,
    locations: [
      {
        city: 'Москва',
      }
    ]
  };
  configFio: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.fio,
  };

}
