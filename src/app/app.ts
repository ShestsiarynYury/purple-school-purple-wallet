import { Component, effect, signal } from '@angular/core';
import { ButtonComponent } from './shared/button/button';
import { InputComponent } from './shared/input/input';

@Component({
	selector: 'app-root',
	imports: [ButtonComponent, InputComponent],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
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
