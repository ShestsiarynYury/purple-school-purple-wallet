import { Routes } from '@angular/router';
import { AssetsComponent } from './private/pages/assets/assets.component';
import { authGuard } from '../shared/guards/auth.guard';
import { PrivateLayoutComponent } from './private/_layout/layout';
import { DashboardComponent } from './private/pages/dashboard/dashboard';
import { RatesComponent } from './private/pages/rates/rates.component';
import { ExchangeComponent } from './private/pages/exchange/exchange.component';
import { PublicLayoutComponent } from './public/_layout/layout';

export const routes: Routes = [
	{
		path: 'private',
		component: PrivateLayoutComponent,
		canActivate: [authGuard],
		children: [
			{
				path: 'dasboard',
				component: DashboardComponent,
				title: 'Главная',
				data: { isShowSearch: false },
			},
			{
				path: 'assets',
				component: AssetsComponent,
				title: 'Мои ассеты',
				data: { isShowSearch: false },
			},
			{
				path: 'exchange',
				component: ExchangeComponent,
				title: 'Обмен',
				data: { isShowSearch: false },
			},
			{
				path: 'rates',
				component: RatesComponent,
				title: 'Курсы валют',
				data: { isShowSearch: true },
			},
			{
				path: '**',
				redirectTo: 'dashboard',
			},
		],
	},
	{
		path: 'public',
		component: PublicLayoutComponent,
		canActivate: [authGuard],
		children: [
			{
				path: 'login',
				component: DashboardComponent,
				title: 'Логин',
			},
			{
				path: '**',
				redirectTo: 'login',
			},
		],
	},
	{
		path: '**',
		redirectTo: 'login',
	},
];
