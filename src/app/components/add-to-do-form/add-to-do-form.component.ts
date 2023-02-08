import { TodoServiceService } from 'src/app/store/actions';
import { Component, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-to-do-form',
  templateUrl: './add-to-do-form.component.html',
})
export class AddToDoFormComponent {
  formData: ITask = {};
  // @ViewChild('myForm') form: NgForm = {} as NgForm;

  constructor(private TodoServiceService: TodoServiceService) {}

  onValueChange(value: string) {
    this.formData.title = value;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.TodoServiceService.addTask(this.formData);
    this.formData = {};
    // this.form.reset();
  }
}
