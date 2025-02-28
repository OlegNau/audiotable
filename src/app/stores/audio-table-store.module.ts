import {StoreModule} from "@ngrx/store";
import {AUDIO_TABLE_STATE_KEY, audioTablesReducer} from "./audio-table.reducer";
import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {AudioTableEffects} from "./audio-table.effects";

@NgModule({
    imports: [
        StoreModule.forFeature(AUDIO_TABLE_STATE_KEY, audioTablesReducer),
        EffectsModule.forFeature([AudioTableEffects]),
    ],
})
export class AudioTableStoreModule {}
