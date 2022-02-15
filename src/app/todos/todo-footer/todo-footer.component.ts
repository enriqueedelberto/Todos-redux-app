import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import  * as actions from '../../filter/filter.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  actualFilter: actions.validFilters = 'all';
  filters: actions.validFilters[]  = ['all', 'completed', 'pending'];
  pendings: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filters').subscribe( filter=> {       
    //   this.actualFilter = filter;
    // });

    this.store.subscribe( state => {
      this.actualFilter = state.filters;
      this.pendings = state.todos.filter( todo => !todo.completed).length;
    });
  }


  changeFilter(filter: actions.validFilters){
    //Implement action
    this.actualFilter = filter;
    this.store.dispatch(actions.setFilter({filter: filter}));

  }

}
