import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { RateComponent } from './components/rate/rate.component';
import { RatesService } from './services/rates.service';
import { IRateModel } from './models/rates.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-rates',
	templateUrl: './rates.component.html',
	styleUrl: './rates.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [RatesService],
	imports: [RateComponent],
})
export class RatesComponent {
	private _ratesService: RatesService = inject(RatesService);

	rates: Signal<IRateModel[] | undefined> = toSignal(this._ratesService.filteredRates$);

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
}
