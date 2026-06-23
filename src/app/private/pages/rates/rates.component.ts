import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FAKE_RATES } from '../../../../shared/constants/fake-rates.const';
import { IRateModel } from './models/rates.model';
import { RateComponent } from './components/rate/rate.component';

@Component({
	selector: 'app-rates',
	templateUrl: './rates.component.html',
	styleUrl: './rates.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RateComponent],
})
export class RatesComponent {
	rates: IRateModel[] = FAKE_RATES;
}
