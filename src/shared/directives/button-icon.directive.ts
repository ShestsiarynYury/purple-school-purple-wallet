import {
	Directive,
	effect,
	EmbeddedViewRef,
	inject,
	input,
	OnInit,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';

interface AppButtonIconContext {
	$implicit: string; // текущий URL (его и биндим в [ngSrc])
	// Это **«значение по умолчанию»**, которое доступно в `let-...` переменной без указания имени свойства.
	// Angular резервирует это имя в контексте структурных директив
	active: boolean; // состояние флага (пригодится, если нужно)
}

@Directive()
export class ButtonIconDirective implements OnInit {
	isActive = input<boolean | null>(null);
	url = input<string | null>(null);
	activeUrl = input<string | null>(null);

	private _tmp = inject(TemplateRef<any>);
	private _vcr = inject(ViewContainerRef);

	private viewRef?: EmbeddedViewRef<AppButtonIconContext>;
	private _viewRef?: EmbeddedViewRef<AppButtonIconContext>;

	constructor() {
		effect(() => {
			const isActiveValue = this.isActive();
			const urlValue = this.url();
			const activeUrl = this.activeUrl();
		});
	}

	ngOnInit(): void {
		this._createOrUpdateView();
	}

	private _createOrUpdateView() {
		const current = this.pickCurrentUrl();
		const ctx: AppButtonIconContext = {
			$implicit: current,
			active: !!this.isActive,
		};

		if (!this.viewRef) {
			this._vcr.clear();
			this._viewRef = this.vcr.createEmbeddedView(this.tpl, ctx);
		} else {
			this._viewRef.context.$implicit = current;
			this._viewRef.context.active = !!this.isActive;
			this._viewRef.markForCheck?.();
		}
	}

	private pickCurrentUrl(): string {
		const active = !!this.isActive;
		if (active && this.activeUrl) return this.activeUrl;
		if (!active && this.url) return this.url;
		// Фолбэк, если что-то не передано:
		return (this.activeUrl ?? this.url ?? '') as string;
	}
}
