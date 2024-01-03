import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-karma',
  templateUrl: './field-karma.component.html',
  styleUrls: ['./field-karma.component.css']
})
export class FieldKarmaComponent {

  @Input() value: number = 0;

}
