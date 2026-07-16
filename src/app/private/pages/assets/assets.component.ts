import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { IAssetModel } from './models/assets.model';
import { AssetComponent } from './components/asset/asset.component';
import { AssetsService } from './services/assets.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
	selector: 'app-assets',
	templateUrl: './assets.component.html',
	styleUrl: './assets.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [AssetsService],
	imports: [AssetComponent],
})
export class AssetsComponent {
	private _assetsService = inject(AssetsService);

	assetsSignal: Signal<IAssetModel[] | undefined> = toSignal(this._assetsService.assets$, {
		initialValue: [],
	});
}
