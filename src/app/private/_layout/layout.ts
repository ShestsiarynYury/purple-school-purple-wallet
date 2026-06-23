import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NAV_CONST } from './constants';
import { INavConst } from '../../../shared/components/nav-button/models';
import { NavButtonComponent } from '../../../shared/components/nav-button/nav-button';

@Component({
	selector: 'app-layout',
	styleUrl: './layout.scss',
	templateUrl: './layout.html',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet, NgOptimizedImage, NavButtonComponent, RouterLink],
})
export class LayoutComponent {
	navLinks: INavConst[] = NAV_CONST;

	onLogoutClick(): void {
		console.log('logout');
	}
}
