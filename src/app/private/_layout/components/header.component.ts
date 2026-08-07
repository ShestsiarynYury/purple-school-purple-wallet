import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	inject,
	OnInit,
	signal,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { delay, filter, map, of, startWith, switchMap, tap } from 'rxjs';
import { FAKE_PROFILE, IUserModel } from '../../../../shared/constants/fake-profile.consts';
import { NgOptimizedImage } from '@angular/common';
import { SearchInputComponent } from '../../../../shared/components/search-input/search-input.componet';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreService } from '../../../../shared/services/store.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgOptimizedImage, SearchInputComponent, FormsModule, ReactiveFormsModule],
})
export class HeaderComponent implements OnInit {
	private _titleService = inject(Title);
	private _router = inject(Router);
	private _destroyRef = inject(DestroyRef);
	private _activatedRoute = inject(ActivatedRoute);
	private _storeService = inject(StoreService);

	title = signal<string>('');
	profileData = toSignal<IUserModel>(of(FAKE_PROFILE).pipe(delay(100)));
	isShowSearch = toSignal<boolean>(
		this._router.events.pipe(
			startWith(null),
			filter((event) => event === null || event instanceof NavigationEnd),
			map(() => {
				let activatedRoute: ActivatedRoute | null = this._activatedRoute;
				while (activatedRoute?.firstChild) activatedRoute = activatedRoute.firstChild;
				return activatedRoute;
			}),
			switchMap((route) => route['data']),
			map((value) => value['isShowSearch'] ?? false),
		),
	);

	searchValue = toSignal(
		this._activatedRoute.queryParamMap.pipe(map((value) => value.get('value') ?? '')),
	);

	ngOnInit(): void {
		this._setFormValueToStore();
		this._router.events
			.pipe(
				delay(100),
				tap((event) => {
					if (event instanceof NavigationEnd) {
						this.title.set(this._titleService.getTitle());
					}
				}),
				takeUntilDestroyed(this._destroyRef),
			)
			.subscribe();
	}

	private _setFormValueToStore(): void {
		this.form.controls['search'].valueChanges
			.pipe(
				tap((value) => this._storeService.setFormValue('search', value)),
				takeUntilDestroyed(this._destroyRef),
			)
			.subscribe();
	}

	onInputChange(value: string): void {
		this._router.navigate([], {
			relativeTo: this._activatedRoute,
			queryParams: { value },
			queryParamsHandling: 'merge',
		});
	}

	form: FormGroup = new FormGroup({
		search: new FormControl(''),
	});
}
