import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { InputComponent } from '../../shared/components/input/input';
import { PasswordInputComponent } from '../../shared/components/password-input/password-input';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.html',
	styleUrl: './layout.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonComponent, InputComponent, PasswordInputComponent, PasswordInputComponent],
})
export class LayoutComponent {
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
