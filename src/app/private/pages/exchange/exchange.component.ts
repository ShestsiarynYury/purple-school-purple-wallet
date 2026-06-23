import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-exchange',
	templateUrl: './exchange.component.html',
	styleUrl: './exchange.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeComponent {}
