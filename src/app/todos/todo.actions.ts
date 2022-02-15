import { createAction, props } from "@ngrx/store";

 export const create = createAction(
   '[TODO] Create todo',
    props<{text:string}>()

 );

 export const toggle = createAction(
  '[TODO] Toggle todo',
   props<{id:number}>()

);

export const edit = createAction(
  '[TODO] Edit todo',
   props<{id:number, text: string}>()

);

export const erase = createAction(
   '[TODO] Delete todo',
    props<{id:number}>()
 
 );


 export const toggleAll = createAction(
   '[TODO] Toggle all todos',
    props<{ completed: boolean}>()
 
 );
