import { Component } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

interface user{
  firstname: string;
  lastname: string;
  age: number;
}


@Component({
  selector: 'app-structular-directives',
  templateUrl: './structular-directives.component.html',
  styleUrls: ['./structular-directives.component.css']
})
export class StructularDirectivesComponent {

  paragraph = new LoremIpsum().generateParagraphs(1);
  paragraphVisible = true;

  userData: user[]=[
    {firstname: 'Thras', lastname:'Papa', age: 40},
    {firstname: 'Mersinh', lastname:'Zap', age: 40},
    {firstname: 'Antwnia', lastname:'Arapi', age: 40},
    {firstname: 'Tasos', lastname:'Kar', age: 40}
  ]


  toggleParagraph(){
    this.paragraphVisible = !this.paragraphVisible;
  }

}
