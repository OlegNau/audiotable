import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { audioTableActions } from './stores/audio-table.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(audioTableActions.get());
  }
}
