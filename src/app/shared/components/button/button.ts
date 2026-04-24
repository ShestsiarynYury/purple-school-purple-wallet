import { ChangeDetectionStrategy, Component, input, InputSignal, output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.html',
	styleUrl: './button.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
	title: InputSignal<string> = input.required();
	disabled: InputSignal<boolean> = input.required();

	buttonClick = output();

	onButtonClick() {
		console.log('button clicked in button component');
		this.buttonClick.emit();
	}
}
