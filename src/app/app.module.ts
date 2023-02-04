import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './components/first.component';
import { TableComponent } from './components/table/table_ng.component';
import { SecondComponent } from './components/second/second.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent, NameComponent, TableComponent, SecondComponent, TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
