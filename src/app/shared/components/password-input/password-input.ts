import { ChangeDetectionStrategy, Component, input, model, signal } from '@angular/core';
import { Icons } from '../icon';

@Component({
	selector: 'app-password-input',
	templateUrl: './password-input.html',
	styleUrl: './password-input.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent {
	placeholder = input<string>('');
	disabled = input<boolean>(false);
	mode = signal<boolean>(false);
	value = model<string>('');

	Icons = Icons;

	toggleMode() {
		this.mode.update((prevMode) => !prevMode);
	}
}
