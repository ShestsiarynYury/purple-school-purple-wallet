import { Component, forwardRef, input, output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-input',
	templateUrl: './input.html',
	styleUrl: './input.scss',
	standalone: true,
	imports: [FormsModule],
	providers: [
		{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true },
	],
})
export class InputComponent implements ControlValueAccessor {
	private onChange: (value: string) => void = () => {};
	private onTouched: () => void = () => {};

	type = input<'text' | 'email'>('text');
	placeholder = input<string>('');
	disabled = false;
	iconUrl = input<string | null>(null);

	value = '';
	inputEvent = output<string>();

	onInput(input: string) {
		console.log(input);
		this.inputEvent.emit(input);
	}

	writeValue(value: string): void {
		this.value = value ?? '';
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

	handleInput(event: Event): void {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		this.value = value;

		this.onChange(value);
		this.onTouched();
	}
}
