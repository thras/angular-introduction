import { Component } from '@angular/core';
import {orderBy} from 'lodash-es';

export interface user{
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['./component-input.component.css']
})
export class ComponentInputComponent {
  userData: user[]=[
    {firstname: 'Thras', lastname:'Papa', age: 40},
    {firstname: 'Mersinh', lastname:'Zap', age: 39},
    {firstname: 'Antwnia', lastname:'Arapi', age: 38},
    {firstname: 'Tasos', lastname:'Kar', age: 39}
  ]

  sortByAge(){
    this.userData = orderBy(this.userData, ['age'],['desc']);
  }
  sortByAgeAsc(){
    this.userData = orderBy(this.userData, ['age'],['asc']);
  }
  sortByAgeLast(){
    this.userData = orderBy(this.userData, ['age', 'lastname'],['desc', 'desc']);
  }



}
