import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Input() label?: string = '';
  @Input() type?: string = 'text';
  @Input() placeholder?: string = '';
  @Input() value?: string = '';
  @Input() name?: string = '';
  @Input() required?: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  onValueChange(event: Event) {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }
}
