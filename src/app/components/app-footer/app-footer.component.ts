import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { audioTableSelectors } from 'src/app/stores/audio-table.selectors';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.less'],
  imports: [NgClass, AsyncPipe, NgIf, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  standalone: true
})
export class AppFooterComponent {
  readonly icon = 'assets/6.svg'

  constructor(private readonly store: Store) {}

  readonly audio$ = this.store.select(audioTableSelectors.openAudio);
  readonly audioLoading$ = this.store.select(audioTableSelectors.loadingAudio)

  playAudio(audioUrl: string): void {
    const audio = new Audio(audioUrl);
    audio.play();
  }
}
