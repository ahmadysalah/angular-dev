import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formData: ITask = {};

  onValueChange(value: string) {
    this.formData.name = value;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.formData);
  }
}
