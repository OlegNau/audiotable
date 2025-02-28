import {Injectable} from "@angular/core";
import { audioListMock } from "src/assets/audio-list";
import { AudioData } from '../interfaces';

@Injectable({
    providedIn: "root",
})

export class AudioService {
  getAudio(id: number): AudioData | null {
    return audioListMock.find((audio: AudioData) => audio.id === id) ?? null;
  }
}
