import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NAV_CONST } from './constants';
import { INavConst } from '../../../shared/components/nav-button/models';

@Component({
	selector: 'app-layout',
	styleUrl: './layout.scss',
	templateUrl: './layout.html',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet, NgOptimizedImage, RouterLink],
})
export class PublicLayoutComponent {
	navLinks: INavConst[] = NAV_CONST;

	onLogoutClick(): void {
		console.log('logout');
	}
}
