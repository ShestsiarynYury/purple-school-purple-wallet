import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button';
import { InputComponent } from '../../../../shared/components/input/input';
import { PasswordInputComponent } from '../../../../shared/components/password-input/password-input';
import { Icons } from '../../../../shared/icons';
import { Images } from '../../../../shared/images';
import { AuthService } from '../../../../shared/services/auth.service';
import { catchError, of, take, tap } from 'rxjs';
import { Router } from '@angular/router';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { noSpaceValidator } from '../../../../shared/validators/no-space.validator';

@Component({
	selector: 'app-login',
	templateUrl: './login.html',
	styleUrl: './login.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		ButtonComponent,
		InputComponent,
		PasswordInputComponent,
		FormsModule,
		ReactiveFormsModule,
	],
})
export class LoginComponent implements OnInit {
	private _authService = inject(AuthService);
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

	ngOnInit(): void {
		this.form.valueChanges.subscribe();
	}

	onLoginClick(): void {
		if (this.form.controls.email == null || this.form.controls.password == null) {
			return;
		}

		this._authService
			.login$(this.form.controls.email.value, this.form.controls.password.value)
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

	form = new FormGroup({
		email: new FormControl('', {
			nonNullable: true,
			validators: [Validators.required, Validators.email],
		}),
		password: new FormControl('', {
			nonNullable: true,
			validators: [Validators.required, noSpaceValidator()],
		}),
	});
}
