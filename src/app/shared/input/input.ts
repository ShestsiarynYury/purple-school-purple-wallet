import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-input',
	templateUrl: './input.html',
	styleUrl: './input.scss',
	standalone: true,
	imports: [FormsModule],
})
export class InputComponent {
	type = input<'text' | 'email'>('text');
	placeholder = input<string>('');
	disabled = input<boolean>(false);
	iconUrl = input<string | null>(null);

	value = input<string>('');
	inputEvent = output<string>();

	onInput(input: string) {
		console.log(input);
		this.inputEvent.emit(input);
	}
}
