import {createActionGroup, emptyProps, props} from "@ngrx/store";
import { AudioData } from '../interfaces';

export const audioTableActions = createActionGroup({
    source: 'AUDIO_TABLE',
    events: {
        Get: emptyProps(),
        'Get success': props<{audioListMock: readonly AudioData[]}>(),
        'Get fail': emptyProps(),
        'Get audio': props<{id: number}>(),
        'Get audio success': props<{audio: AudioData | null}>(),
        'Get audio fail': emptyProps(),
    },
});
