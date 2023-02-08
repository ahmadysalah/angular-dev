import { STORE_SELECTOR } from './../../store/selectors';
import { Store } from '@ngrx/store';
import { Component, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  tasks = 0;
  constructor(private store: Store<TASK_STATE>) {
    this.store.select(STORE_SELECTOR.TASKS).subscribe((tasks) => {
      this.tasks = tasks.length;
    });
  }
}
