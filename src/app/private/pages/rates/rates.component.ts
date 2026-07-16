import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { RateComponent } from './components/rate/rate.component';
import { RatesService } from './services/rates.service';
import { IRateModel } from './models/rates.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { StoreService } from '../../../../shared/services/store.service';
import { FAKE_RATES } from '../../../../shared/constants/fake-rates.const';

@Component({
	selector: 'app-rates',
	templateUrl: './rates.component.html',
	styleUrl: './rates.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [RatesService],
	imports: [RateComponent],
})
export class RatesComponent implements OnInit {
	private _ratesService: RatesService = inject(RatesService);
	private _storeService = inject(StoreService);

	rates: Signal<IRateModel[] | undefined> = toSignal(this._storeService.getValueAsync('rates'), {
		initialValue: [],
	});

	// private _activatedRoute = inject(ActivatedRoute);
	// rates = signal<IRateModel[]>([]);
	// searchQuery = toSignal(
	// 	this._activatedRoute.queryParamMap.pipe(
	// 		map((params) => (params.get('value') ?? '').trim().toLowerCase()),
	// 	),
	// 	{ initialValue: '' },
	// );
	// // сработает когда обновяться rates или searchQuery
	// filteredRates = computed(() => {
	// 	const query = this.searchQuery();
	// 	const list = this.rates();

	// 	if (!query) {
	// 		return list;
	// 	}

	// 	return list.filter(
	// 		(rate) =>
	// 			rate.assetId.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
	// 			rate.assetName.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
	// 	);
	// });

	ngOnInit(): void {
		this._storeService.setValue('rates', FAKE_RATES);
	}
}
