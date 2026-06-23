import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IRateModel } from '../../models/rates.model';
import { NgClass, NgOptimizedImage, PercentPipe } from '@angular/common';

@Component({
	selector: 'app-rate',
	templateUrl: './rate.component.html',
	styleUrl: './rate.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgOptimizedImage, NgClass, PercentPipe],
})
export class RateComponent {
	data = input<IRateModel | null>();
}
