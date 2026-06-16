import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { Icons } from '../../shared/icons';
import { Images } from '../../shared/images';
import { ButtonComponent } from '../../shared/components/button/button';
import { InputComponent } from '../../shared/components/input/input';
import { PasswordInputComponent } from '../../shared/components/password-input/password-input';

@Component({
	selector: 'app-login',
	templateUrl: './login.html',
	styleUrl: './login.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonComponent, InputComponent, PasswordInputComponent],
})
export class LoginComponent {
	Images = Images;
	Icons = Icons;

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
