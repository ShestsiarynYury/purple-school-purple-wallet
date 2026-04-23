import { Component, effect, signal } from '@angular/core';
import { ButtonComponent } from './shared/button/button';
import { InputComponent } from './shared/input/input';
import { PasswordInputComponent } from './shared/password-input/password-input';

@Component({
	selector: 'app-root',
	imports: [ButtonComponent, InputComponent, PasswordInputComponent, PasswordInputComponent],
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
