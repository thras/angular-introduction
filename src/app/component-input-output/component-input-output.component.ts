import { Component } from '@angular/core';


export interface user{
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css']
})
export class ComponentInputOutputComponent {
  userData: user[]=[
    {firstname: 'Thras', lastname:'Papa', age: 40},
    {firstname: 'Mersinh', lastname:'Zap', age: 39},
    {firstname: 'Antwnia', lastname:'Arapi', age: 38},
    {firstname: 'Tasos', lastname:'Kar', age: 39}
  ]

  onDeleteUser(index: number){
    console.log(index);
    this.userData.splice(index, 1);
  }
  
}
