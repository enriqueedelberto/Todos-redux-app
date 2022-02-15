import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { validFilters } from 'src/app/filter/filter.actions';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []; 
  actualFilter!: validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( ({todos, filters}) => {
      console.log('State in TodoList Comp ' ,filters);
          this.todos        = todos;
          this.actualFilter = filters;
        });
  }

}
