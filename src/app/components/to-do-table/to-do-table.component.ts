import { STORE_SELECTOR } from './../../store/selectors';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoServiceService, getAll, setLoading } from 'src/app/store/actions';

@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.css'],
})
export class ToDoTableComponent implements OnInit {
  articles$: Observable<Array<ITask>>;
  loading = false;

  constructor(
    private store: Store,
    private TodoServiceService: TodoServiceService
  ) {
    this.articles$ = this.store.select(STORE_SELECTOR.TASKS);
  }

  async ngOnInit() {
    // this.store.dispatch(setLoading());
    this.store.dispatch(getAll(await this.TodoServiceService.getTasks()));
    // this.store.dispatch(setLoading());
  }
}
