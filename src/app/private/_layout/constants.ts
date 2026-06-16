import { INavConst } from '../../shared/components/nav-button/models';

export const NAV_CONST: INavConst[] = [
	{
		text: 'Главная',
		iconUrl: 'menu/dashboard.svg',
		iconUrlActive: 'menu/dashboard-active.svg',
		url: '/dashboard',
		id: 0,
	},
	{
		text: 'Мои монеты',
		iconUrl: 'menu/wallet.svg',
		iconUrlActive: 'menu/wallet-active.svg',
		url: '/private/assets',
		id: 1,
	},
	{
		text: 'Курсы',
		iconUrl: 'menu/rates.svg',
		iconUrlActive: 'menu/rates-active.svg',
		url: '/private/rates',
		id: 2,
	},
	{
		text: 'Обмен',
		iconUrl: 'menu/exchange.svg',
		iconUrlActive: 'menu/exchange-active.svg',
		url: '/private/exchange',
		id: 3,
	},
];
