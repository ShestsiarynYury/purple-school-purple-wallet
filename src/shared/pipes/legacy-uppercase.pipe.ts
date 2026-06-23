import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'legacyuppercase',
	standalone: true,
})
export class LegacyUpperCasePipe implements PipeTransform {
	transform(value: any, type: 'uppercase' | 'titlecase' = 'uppercase') {
		if (typeof value === 'string') {
			return type === 'uppercase'
				? value.toUpperCase()
				: value
						.toLowerCase()
						.split(' ')
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(' ');
		} else {
			return value;
		}
	}
}
