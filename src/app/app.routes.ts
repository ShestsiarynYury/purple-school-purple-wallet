import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login';
import { authGuard } from '../shared/guards/auth.guard';

export const routes: Routes = [
	{
		path: 'login',
		canActivate: [authGuard],
		component: LoginComponent,
	},
	{
		path: '**',
		redirectTo: 'login',
	},
];
