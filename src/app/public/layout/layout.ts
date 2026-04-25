import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { Images } from '../../shared/images';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.html',
	styleUrl: './layout.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [],
})
export class LayoutComponent {
	Images = Images;
	title = signal<string>('purple-wallet');
	email = signal<string>('');

	constructor() {
		effect(() => {
			console.log(this.email());
		});
	}

	onInputEmail(input: string) {
		this.email.update(() => input);
	}
}
