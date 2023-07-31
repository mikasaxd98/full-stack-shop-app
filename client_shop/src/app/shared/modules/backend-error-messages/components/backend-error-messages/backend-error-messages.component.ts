import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackendErrorMessagesComponent {
  @Input()
  errors: string[] = [];
}
