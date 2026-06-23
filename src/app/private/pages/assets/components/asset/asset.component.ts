import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IAssetModel } from '../../models/assets.model';
import { CurrencyPipe, NgClass, NgOptimizedImage } from '@angular/common';
import { LegacyUpperCasePipe } from '../../../../../../shared/pipes/legacy-uppercase.pipe';

@Component({
	selector: 'app-asset',
	templateUrl: './asset.component.html',
	styleUrl: './asset.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgOptimizedImage, CurrencyPipe, LegacyUpperCasePipe, NgClass],
})
export class AssetComponent {
	data = input<IAssetModel | null>(null);
}
