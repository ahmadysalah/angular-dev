import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-image',
  template: ` <bi
    [name]="isActive ? 'archive-fill' : 'archive'"
    (click)="isActive = !isActive"
  ></bi>`,

  styles: [
    `
      bi {
        height: 30px;
        width: 30px;
      }
      .small {
        height: 20px;
        width: 20px;
      }
      .big {
        height: 50px;
        width: 50px;
      }
      .fill-red {
        color: red;
      }
    `,
  ],
})
export class ToggleImageComponent {
  isActive = false;
}
