import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { audioTableActions } from './stores/audio-table.actions';
import { map, Observable } from 'rxjs';
import { audioTableSelectors } from './stores/audio-table.selectors';
import { AudioData } from '../app/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  dataSource$: Observable<AudioData[]> = new Observable;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.dataSource$ = this.store.select(audioTableSelectors.audioList).pipe(
      map((audioList: readonly AudioData[]) => [...audioList])
    );

    this.store.dispatch(audioTableActions.get());
  }
}
