import { Observable } from 'rxjs';
import { TodoServiceService } from './../../store/actions';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STORE_SELECTOR } from 'src/app/store/selectors';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  task: ITask = Observable<ITask> as ITask;
  routeId = '';
  constructor(
    private route: ActivatedRoute,
    private store: Store<TASK_STATE>,
    private TodoServiceService: TodoServiceService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.routeId = params.get('id') as string;
    });
  }

  async ngOnInit(): Promise<void> {
    await this.TodoServiceService.getTasks();
    this.TodoServiceService.getSingleTaskById(this.routeId);
    this.store.select(STORE_SELECTOR.TASK).subscribe((task) => {
      if (task) this.task = task;
    });
  }
}
