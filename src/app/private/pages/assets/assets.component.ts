import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IAssetModel } from './models/assets.model';
import { AssetComponent } from './components/asset/asset.component';
import { FAKE_ASSETS } from '../../../../shared/constants/fake-assets';

@Component({
	selector: 'app-assets',
	templateUrl: './assets.component.html',
	styleUrl: './assets.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [AssetComponent],
})
export class AssetsComponent {
	assets: IAssetModel[] = FAKE_ASSETS;
}
