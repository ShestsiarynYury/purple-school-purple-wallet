import { inject, Injectable } from '@angular/core';
import { Observable, of, delay, tap, map } from 'rxjs';
import { FAKE_ASSETS } from '../../../../../shared/constants/fake-assets';
import { StoreService } from '../../../../../shared/services/store.service';
import { IAssetModel } from '../models/assets.model';

@Injectable()
export class AssetsService {
	private _store: StoreService = inject(StoreService);
	readonly assets$: Observable<IAssetModel[]> = this._store.getValueAsync('assets');

	constructor() {
		this._updateAssets$().subscribe();
	}

	private _updateAssets$(): Observable<void> {
		return of(0).pipe(
			delay(1000),
			tap(() => this._store.setValue('assets', FAKE_ASSETS)),
			map(() => void 0),
		);
	}
}
