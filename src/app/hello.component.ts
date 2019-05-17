import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hola, sóc el {{name}}!</h1>`,
  styles: [`h1 { font-family: fantasy; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
