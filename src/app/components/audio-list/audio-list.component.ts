import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, NgIf } from '@angular/common';
import { AudioData } from '../../interfaces';
import { Store } from '@ngrx/store';
import { audioTableSelectors } from 'src/app/stores/audio-table.selectors';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { audioTableActions } from 'src/app/stores/audio-table.actions';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.less'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ]
})
export class AudioListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'audio'];
  readonly isLoading$ = this.store.select(audioTableSelectors.loading);
  dataSource$: Observable<AudioData[]> = new Observable;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.dataSource$ = this.store.select(audioTableSelectors.audioList).pipe(
      map((audioList: readonly AudioData[]) => [...audioList])
    );

  }

  openAudio(audioId: number): void {
    this.store.dispatch(audioTableActions.getAudio({id: audioId}))
  }
}
