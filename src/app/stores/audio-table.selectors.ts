import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AUDIO_TABLE_STATE_KEY, AudioTableState} from "./audio-table.reducer";

const audioTableStateSelector = createFeatureSelector<AudioTableState>(AUDIO_TABLE_STATE_KEY);

export const audioTableSelectors = {
    state: createSelector(audioTableStateSelector, state => state),
    loading: createSelector(audioTableStateSelector, state => state.loading),
    loadingError: createSelector(audioTableStateSelector, state => state.loadingError),
    audioList: createSelector(audioTableStateSelector, state => state.audioList),
    openAudio: createSelector(audioTableStateSelector, state => state.openAudio),
    loadingAudio: createSelector(audioTableStateSelector, state => state.loadingAudio),
    loadingAudioError: createSelector(audioTableStateSelector, state => state.loadingAudioError),
}
