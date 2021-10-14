import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { decrementContador, IAppState, incrementContador } from '../store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter$: Observable<any>;

  constructor(private store: Store<{ app: IAppState }>) {

  }

  ngOnInit(): void {
    this.counter$ = this.store
      .select('app')
      .pipe(
        map(app => app.counter)
      );
  }

  increment(): void {
    this.store.dispatch(incrementContador());
  }

  decrement(): void {
    this.store.dispatch(decrementContador());
  }
}
