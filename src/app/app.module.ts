import { FormsModule } from '@angular/forms';
import { ApiServiceService } from './utils/api-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { AddToDoFormComponent } from './components/add-to-do-form/add-to-do-form.component';
import { ToDoTableComponent } from './components/to-do-table/to-do-table.component';
import { StoreModule } from '@ngrx/store';
import { TasksReducers } from './store/reducers';
import { TodoServiceService } from './store/actions';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextInputComponent,
    AddToDoFormComponent,
    ToDoTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tasks: TasksReducers,
    }),
    // FormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [TodoServiceService, ApiServiceService],
})
export class AppModule {}
