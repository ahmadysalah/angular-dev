import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firs app';
  table_data =
    [
      { name: 'John', age: 20, address: 'Developer' },
      { name: 'Mike', age: 25, address: 'Manager' },
      { name: 'Linda', age: 30, address: 'Designer' }
    ]

  sec_data = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Mike', lastName: 'Smith' },
    { firstName: 'Linda', lastName: 'Williams' }
  ]

  apiData = []

  inputValue = '';
  loading = false;
  constructor() {
    this.get_data();
  }


  handleChangeValue = (value: string) => {
    this.inputValue = value;
  }

  async get_data() {
    this.loading = true;
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    this.loading = false;
    console.log(res.data);
    this.apiData = res.data;
  }
}
