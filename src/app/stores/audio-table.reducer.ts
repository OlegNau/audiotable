import { AudioData } from '../interfaces';
import {Action, ActionType, createReducer, on} from "@ngrx/store";
import {audioTableActions} from "./audio-table.actions";

export interface AudioTableState {
    readonly loading: boolean;
    readonly loadingError: boolean;
    readonly audioList: readonly AudioData[];
    readonly loadingAudio: boolean;
    readonly loadingAudioError: boolean;
    readonly openAudio: AudioData | null;
}

export const AUDIO_TABLE_STATE_KEY = 'audioList';

export const initialState: AudioTableState = {
    loading: false,
    loadingError: false,
    audioList: [],
    loadingAudio: false,
    loadingAudioError: false,
    openAudio: null,
};

const getingReducer = (state: AudioTableState) => ({
    ...state,
    loading: true,
    loadingError: false,
    audioList: [],
});

const getSuccessReducer = (state: AudioTableState, {audioListMock}: ActionType<typeof audioTableActions.getSuccess>,) => {
  return {
        ...state,
        loading: false,
        loadingError: false,
        audioList: audioListMock,
    }
};

const getFailReducer = (state: AudioTableState) => ({
    ...state,
    loading: false,
    loadingError: true,
    audioList: [],
});

const getAudioReducer = (state: AudioTableState) => ({
    ...state,
    loadingAudio: true,
    loadingAudioError: false,
    openAudio: null,
});

const getAudioSuccessReducer = (state: AudioTableState, {audio}: ActionType<typeof audioTableActions.getAudioSuccess>,) => {
    if (audio === null) {
      return state;
    }

    return {
      ...state,
      loadingAudio: false,
      loadingAudioError: false,
      openAudio: audio,
    }
};

const getAudioFailReducer = (state: AudioTableState) => ({
    ...state,
    loadingAudio: false,
    loadingAudioError: true,
    openAudio: null,
  });

const reducer = createReducer(
    initialState,

    on(audioTableActions.get, getingReducer),
    on(audioTableActions.getSuccess, getSuccessReducer),
    on(audioTableActions.getFail, getFailReducer),
    on(audioTableActions.getAudio, getAudioReducer),
    on(audioTableActions.getAudioSuccess, getAudioSuccessReducer),
    on(audioTableActions.getAudioFail, getAudioFailReducer),
);

export function audioTablesReducer(state: AudioTableState | undefined, action: Action): AudioTableState {
    return reducer(state, action);
}
