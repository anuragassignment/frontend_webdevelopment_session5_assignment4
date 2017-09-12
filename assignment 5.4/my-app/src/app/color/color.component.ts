import { Component } from '@angular/core';
// ViewEncapsulation imported from angular core
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  encapsulation: ViewEncapsulation.None // ViewEncapsulation none disables the encapsulation

})
export class ColorComponent {
}
