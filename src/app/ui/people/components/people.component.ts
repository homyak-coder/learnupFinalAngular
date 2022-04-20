import { Component, OnInit } from '@angular/core';
import {Human} from "../../../human";
import {HUMANS} from "../../../mock-human";

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
    name: 'Даниил',
    surname: 'Холодов',
    patronymic: 'Александрович'

  }

  public humans = HUMANS;



  public selectedHuman?: Human

  public onSelectHuman(human: Human): void {
    this.selectedHuman = human;
  }


}
