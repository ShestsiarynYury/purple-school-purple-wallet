import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login';
import { authGuard } from '../shared/guards/auth.guard';
import { LayoutComponent } from '../pages/layout/layout';
import { DashboardComponent } from '../pages/dashboard/dashboard';

export const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'main',
		canActivate: [authGuard],
		component: LayoutComponent,
		children: [
			{
				path: 'dasboard',
				component: DashboardComponent,
			},
			{
				path: 'assets',
				component: AssetsComponent,
			},
			{
				path: 'exchange',
				component: ExchangeComponent,
			},
			{
				path: 'rates',
				component: RatesComponent,
			},
			{
				path: '**',
				redirectTo: 'dashboard',
			},
		],
	},
	{
		path: '**',
		redirectTo: 'login',
	},
];
