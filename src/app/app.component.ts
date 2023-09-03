import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountClearAction, CountDecreaseAction, CountIncreaseAction } from 'src/app/reducers/count/count.actions';
import { CountState } from 'src/app/reducers/count/count.reducer';
import { selectCount, selectUpdatedAt } from 'src/app/reducers/count/count.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public decreaseDisabled$: Observable<boolean> = this.count$.pipe(map((count) => count <= 0));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

  public constructor(private store$: Store<CountState>) {}

  public increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }

  public decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }

  public clear() {
    this.store$.dispatch(new CountClearAction());
  }
}
