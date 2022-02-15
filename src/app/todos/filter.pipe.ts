import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
   console.log("In pipe ", filter)

     switch ( filter) {
       case 'completed':
          return todos.filter (todo => todo.completed)
        
          case 'pending':
          return todos.filter (todo => !todo.completed)
     
       default:
        return todos
     }
     
  }

}
