import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrl: './search-input.component.scss',
	standalone: true,
	imports: [FormsModule],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SearchInputComponent),
			multi: true,
		},
	],
})
export class SearchInputComponent implements ControlValueAccessor {
	private _innerValue = '';
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private _onChange: (value: string) => void = (value: string) => {};
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private _onTouched: () => void = () => {};

	type = input<'text' | 'email'>('text');
	placeholder = input<string>('');
	iconUrl = input<string | null>('/icons/search.svg');
	disabled = false;

	writeValue(value: string): void {
		this._innerValue = value;
	}

	registerOnChange(fn: (value: string) => void): void {
		this._onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this._onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		this._innerValue = value;
		this._onChange(value);
		this._onTouched();
	}
}
