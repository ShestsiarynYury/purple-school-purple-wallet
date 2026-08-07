import {
	ChangeDetectionStrategy,
	Component,
	forwardRef,
	input,
	model,
	signal,
} from '@angular/core';
import { Icons } from '../../icons';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-password-input',
	templateUrl: './password-input.html',
	styleUrl: './password-input.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PasswordInputComponent),
			multi: true,
		},
	],
})
export class PasswordInputComponent implements ControlValueAccessor {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private onChange: (value: string) => void = (value: string) => {};
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private onTouched: () => void = () => {};
	placeholder = input<string>('');
	disabled = false;
	mode = signal<boolean>(false);
	innerValue = '';

	Icons = Icons;

	toggleMode() {
		this.mode.update((prevMode) => !prevMode);
	}

	writeValue(value: string): void {
		this.innerValue = value;
	}

	registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		this.innerValue = value;
		this.onChange(value);
		this.onTouched();
	}
}
