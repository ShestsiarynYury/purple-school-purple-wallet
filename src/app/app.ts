import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutComponent } from './public/layout/layout';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [LayoutComponent],
})
export class App {}
