import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.html',
	styleUrl: './dashboard.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
