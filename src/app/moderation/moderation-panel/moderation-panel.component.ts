import { Component } from '@angular/core';

@Component({
  selector: 'app-moderation-panel',
  templateUrl: './moderation-panel.component.html',
  styleUrl: './moderation-panel.component.css'
})
export class ModerationPanelComponent {
  removeItem(item: string) {
    alert(item + ' has been removed.');
  }
}
