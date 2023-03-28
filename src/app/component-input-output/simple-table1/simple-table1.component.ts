import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from '../component-input-output.component';


@Component({
  selector: 'app-simple-table1',
  templateUrl: './simple-table1.component.html',
  styleUrls: ['./simple-table1.component.css']
})
export class SimpleTable1Component {
@Input() userData: user[] = [];
@Output() deleteUser = new EventEmitter<number>();

onDeleteUser(i: number){
  this.deleteUser.emit(i);
}

}
