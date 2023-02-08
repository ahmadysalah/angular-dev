import { STORE_SELECTOR } from './../../store/selectors';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoServiceService } from 'src/app/store/actions';

@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
})
export class ToDoTableComponent implements OnInit {
  TASKS$: Observable<Array<ITask>>;
  loading = Observable<boolean>;

  constructor(
    private store: Store<TASK_STATE>,
    private TodoServiceService: TodoServiceService
  ) {
    this.TASKS$ = this.store.select(STORE_SELECTOR.TASKS);
    this.store.select(STORE_SELECTOR.LOADING).subscribe((loading) => {
      this.loading = loading;
    });
  }

  async ngOnInit() {
    this.TodoServiceService.getTasks();
  }

  async deleteTask(id?: number) {
    this.TodoServiceService.deleteTask(id);
  }
}
