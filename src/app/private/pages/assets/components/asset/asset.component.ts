import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IAssetModel } from '../../models/assets.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-asset',
	templateUrl: './asset.component.html',
	styleUrl: './asset.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgOptimizedImage],
})
export class AssetComponent {
	data = input<IAssetModel | null>(null);
}
