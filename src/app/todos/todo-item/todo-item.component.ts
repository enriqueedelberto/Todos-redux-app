import { visitAll } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import  * as actions from '../todo.actions';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { todoReducer } from '../todo.reducer';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputReal')
  txtInputReal!: ElementRef;

  chkCompleted!: FormControl;
  textInput!: FormControl;

  editing = false;

  constructor(private store: Store<AppState>) {
    this.todo = { id: 0, text: '', completed: false};
   }

  ngOnInit(): void {
   this.chkCompleted = new FormControl(this.todo.completed);
   this.textInput = new FormControl(this.todo.text, Validators.required);

   this.chkCompleted.valueChanges.subscribe( value => {
     console.log(value);
     this.store.dispatch( actions.toggle({id: this.todo.id} ));

   });
  }

  edit (){
    this.editing = true;
    this.textInput.setValue(this.todo.text);

    setTimeout( ()=>{
      this.txtInputReal.nativeElement.select();
    }); 
    
  }

  endEdition() {
    this.editing = false;

    if(this.textInput.invalid ){
      return;
    }

    if(this.textInput.value === this.todo.text ){
      return;
    }

    this.store.dispatch(
       actions.edit({
         id: this.todo.id,
         text: this.todo.text
       })
    );
  }

  delete() {
    this.store.dispatch( actions.erase({id: this.todo.id}));
  }

}
