import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appFontWeight]',
	standalone: true,
})
export class FontWeuightDirective {
	fontWeight = input<string>('bold');

	private _el = inject(ElementRef);
	private _renderer = inject(Renderer2);

	constructor() {
		effect(() => {
			const fontWeightValue = this.fontWeight();

			if (fontWeightValue != null) {
				this._renderer.setStyle(this._el.nativeElement, 'font-weight', fontWeightValue);
			}
		});
	}
}
