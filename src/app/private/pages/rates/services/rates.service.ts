import { inject, Injectable } from '@angular/core';
// import { BehaviorSubject, delay, map, Observable, of, tap } from 'rxjs';
import { IRateModel } from '../models/rates.model';
import { FAKE_RATES } from '../../../../../shared/constants/fake-rates.const';
import { StoreService } from '../../../../../shared/services/store.service';
import { combineLatest, delay, map, Observable, of, tap } from 'rxjs';

@Injectable()
export class RatesService {
	// private readonly _ratesSubject = new BehaviorSubject<IRateModel[]>([]);
	private _storeService = inject(StoreService);

	readonly rates$: Observable<IRateModel[]> = this._storeService.getValueAsync('rates');
	readonly searchForm$: Observable<string> = this._storeService.getFormValueAsync('search');
	readonly filteredRates$: Observable<IRateModel[]> = combineLatest([
		this.rates$,
		this.searchForm$,
	]).pipe(
		map(([rates, formValue]) =>
			rates.filter((rate) => rate.assetName.toLowerCase().includes(formValue.toLowerCase())),
		),
	);

	constructor() {
		this._updateRates$().subscribe();
	}

	private _updateRates$(): Observable<void> {
		return of(0).pipe(
			delay(1000),
			tap(() => {
				this._storeService.setValue('rates', FAKE_RATES);
			}),
			map(() => void 0),
		);
	}
}
