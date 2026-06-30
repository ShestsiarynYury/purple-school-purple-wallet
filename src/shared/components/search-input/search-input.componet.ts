import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrl: './search-input.component.scss',
	standalone: true,
	imports: [FormsModule],
})
export class SearchInputComponent {
	type = input<'text' | 'email'>('text');
	placeholder = input<string>('');
	disabled = input<boolean>(false);
	iconUrl = input<string | null>('/icons/search.svg');

	value = input<string>('');
	inputEvent = output<string>();

	onInput(input: string) {
		console.log(input);
		this.inputEvent.emit(input);
	}
}
