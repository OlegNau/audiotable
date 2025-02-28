import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {audioTableActions} from "./audio-table.actions";
import {catchError, combineLatest, delay, map, of, tap, withLatestFrom} from "rxjs";
import {audioTableSelectors} from "./audio-table.selectors";
import { AudioData } from '../interfaces';
import { audioListMock } from "src/assets/audio-list";
import { AudioService } from "../services/audio.service";

const LOADING_TIME = 3000;

@Injectable()
export class AudioTableEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly store: Store,
        private readonly audioService: AudioService,
    ) {}

    readonly getCourses$ = createEffect(() =>
      this.actions$.pipe(
          ofType(audioTableActions.get),
          delay(LOADING_TIME),
          withLatestFrom(
              this.store.select(audioTableSelectors.state)),
          map(([_, state]) => {
              return audioTableActions.getSuccess({ audioListMock: audioListMock });
          }),
          catchError(() => of(audioTableActions.getFail())),
      ),
  );

  readonly getCoursesFail$ = createEffect(() =>
      this.actions$.pipe(
          ofType(audioTableActions.getFail),
          tap(() => {
              return console.log('ошибка загрузки audio');
          })
      ),
  )

  readonly getAudio$ = createEffect(() =>
      this.actions$.pipe(
          ofType(audioTableActions.getAudio),
          delay(LOADING_TIME),
          map(({id}) => {

              const audio = this.audioService.getAudio(id);

              return audioTableActions.getAudioSuccess({audio});
          }),
          catchError(() => of(audioTableActions.getAudioFail())),
      ),
  );

  readonly getCourseFail$ = createEffect(() =>
      this.actions$.pipe(
          ofType(audioTableActions.getFail),
          tap(() => {
              return console.log('ошибка загрузки аудио');
          })
      ),
  )
}
