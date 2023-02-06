import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-do-form',
  templateUrl: './add-to-do-form.component.html',
})
export class AddToDoFormComponent {
  formData: ITask = {};

  onValueChange(value: string) {
    this.formData.title = value;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.formData);
    this.formData = {};
  }
}
