import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import * as actions from './todo.actions';


export const initialState: Todo[] = [
    new Todo('Save the world'),
    new Todo('Face Thanos'),
    new Todo('Invent Ultron'),
];


const _todoReducer = createReducer(initialState,
 on(actions.create, (state, {text})  =>  [...state, new Todo(text)]),
 on(actions.erase, (state, {id})  => state.filter( todo => todo.id !== id)),

 on(actions.toggle, (state, {id} )=>{
    return state.map( todo =>{
        if(todo.id === id){
         return {
             ...todo,
             completed: !todo.completed
         }
        }

         return todo;
    })
 }),

 on(actions.toggleAll, (state, {completed} )=>{
    return state.map( todo =>{
        
         return {
             ...todo,
             completed: completed
         }
       
    })
 }),

 on(actions.edit, (state, {id, text} )=>{
    return state.map( todo =>{
        if(todo.id === id){
         return {
             ...todo,
             text: todo.text
         }
        }

         return todo;
    })
 }),

);


export function todoReducer(state: any, action: any) {

    return _todoReducer(state, action);


}


