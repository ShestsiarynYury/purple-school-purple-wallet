import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IAssetModel } from './models/assets.model';
import { FAKE_ASSETS } from '../../../../shared/constants.ts/fake-assets';

@Component({
	selector: 'app-assets',
	templateUrl: './assets.component.html',
	styleUrl: './assets.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [AssetsComponent],
})
export class AssetsComponent {
	assets: IAssetModel[] = FAKE_ASSETS;
}
