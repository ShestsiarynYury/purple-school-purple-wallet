import { Injectable } from '@angular/core';
import { IRateModel } from '../../app/private/pages/rates/models/rates.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IAssetModel } from '../../app/private/pages/assets/models/assets.model';

export interface IAppStore {
	rates: IRateModel[];
	assets: IAssetModel[];
}

export const STORE_INITIAL_VALUES: IAppStore = {
	rates: [],
	assets: [],
};

@Injectable({ providedIn: 'root' })
export class StoreService {
	private readonly _storeSubject = new BehaviorSubject<IAppStore>({
		...STORE_INITIAL_VALUES,
	});

	// getter
	// отдает значение но синхронно
	getValue<K extends keyof IAppStore>(key: K): IAppStore[K] {
		return this._storeSubject.getValue()[key];
	}

	// отдает значение но асинхронно
	getValueAsync<K extends keyof IAppStore>(key: K): Observable<IAppStore[K]> {
		return this._storeSubject.asObservable().pipe(
			map((state) => {
				return state[key];
			}),
		);
	}

	// setter
	setValue<K extends keyof IAppStore>(key: K, value: IAppStore[K]): void {
		this._storeSubject.next({
			...this._storeSubject.getValue(),
			[key]: value,
		});
	}
}
