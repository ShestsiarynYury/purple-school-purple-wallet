import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of, tap } from 'rxjs';
import { IRateModel } from '../models/rates.model';
import { FAKE_RATES } from '../../../../../shared/constants/fake-rates.const';

@Injectable()
export class RatesService {
	private readonly _ratesSubject = new BehaviorSubject<IRateModel[]>([]);

	readonly rates$: Observable<IRateModel[]> = this._ratesSubject.asObservable();

	constructor() {
		this._updateRates$().subscribe();
	}

	private _updateRates$(): Observable<void> {
		return of(0).pipe(
			delay(1000),
			tap(() => {
				this._ratesSubject.next(FAKE_RATES);
			}),
			map(() => void 0),
		);
	}
}
