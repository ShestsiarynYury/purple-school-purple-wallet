import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button';
import { InputComponent } from '../../../../shared/components/input/input';
import { PasswordInputComponent } from '../../../../shared/components/password-input/password-input';
import { Icons } from '../../../../shared/icons';
import { Images } from '../../../../shared/images';
import { AuthService } from '../../../../shared/services/auth.service';
import { catchError, of, take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.html',
	styleUrl: './login.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonComponent, InputComponent, PasswordInputComponent],
})
export class LoginComponent {
	private _authService = inject(AuthService);
	private _formValue: { username: string | null; password: string | null } = {
		username: null,
		password: null,
	};
	private _router: Router = inject(Router);

	error = '';
	Images = Images;
	Icons = Icons;

	title = signal<string>('purple-wallet');
	email = signal<string>('');

	constructor() {
		effect(() => {
			console.log(this.email());
		});
	}

	onInputChange(control: 'username' | 'password', value: string) {
		this._formValue[control] = value;
	}

	onLoginClick(): void {
		if (this._formValue.username == null || this._formValue.password == null) {
			return;
		}

		this._authService
			.login$(this._formValue.username, this._formValue.password)
			.pipe(
				take(1),
				tap(() => this._router.navigate(['private'])),
				catchError((_error) => {
					this.error = _error;

					return of(_error);
				}),
			)
			.subscribe();
	}
}
