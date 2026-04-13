import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.html',
	styleUrl: './button.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {}
