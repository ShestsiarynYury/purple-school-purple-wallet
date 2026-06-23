import { Routes } from '@angular/router';
import { AssetsComponent } from './private/pages/assets/assets.component';
import { LoginComponent } from './public/pages/log-in/login';
import { authGuard } from '../shared/guards/auth.guard';
import { LayoutComponent } from './private/_layout/layout';
import { DashboardComponent } from './private/pages/dashboard/dashboard';
import { RatesComponent } from './private/pages/rates/rates.component';
import { ExchangeComponent } from './private/pages/exchange/exchange.component';

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
