import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { environment } from '../environments/environment';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
