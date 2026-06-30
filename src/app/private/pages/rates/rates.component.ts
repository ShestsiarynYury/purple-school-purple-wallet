import {
	ChangeDetectionStrategy,
	Component,
	computed,
	effect,
	inject,
	OnInit,
	signal,
} from '@angular/core';
import { FAKE_RATES } from '../../../../shared/constants/fake-rates.const';
import { IRateModel } from './models/rates.model';
import { RateComponent } from './components/rate/rate.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
	selector: 'app-rates',
	templateUrl: './rates.component.html',
	styleUrl: './rates.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RateComponent],
})
export class RatesComponent implements OnInit {
	private _activatedRoute = inject(ActivatedRoute);
	rates = signal<IRateModel[]>([]);
	searchQuery = toSignal(
		this._activatedRoute.queryParamMap.pipe(
			map((params) => (params.get('value') ?? '').trim().toLowerCase()),
		),
		{ initialValue: '' },
	);
	// сработает когда обновяться rates или searchQuery
	filteredRates = computed(() => {
		const query = this.searchQuery();
		const list = this.rates();

		if (!query) {
			return list;
		}

		return list.filter(
			(rate) =>
				rate.assetId.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
				rate.assetName.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
		);
	});

	constructor() {
		effect(() => {
			console.log('Rates updated:', this.rates());
		});
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.rates.set(FAKE_RATES);
		}, 1000);
	}
}
