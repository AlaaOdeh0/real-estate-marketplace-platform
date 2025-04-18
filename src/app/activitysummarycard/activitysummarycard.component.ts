import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-activitysummarycard',
  imports: [],
  templateUrl: './activitysummarycard.component.html',
  styleUrl: './activitysummarycard.component.css'
})
export class ActivitysummarycardComponent {
  @Input() title: string = '';
  @Input()count:number=0;
}
