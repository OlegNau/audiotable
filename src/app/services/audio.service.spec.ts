import { TestBed } from '@angular/core/testing';
import { AudioService } from './audio.service';
import { audioListMock } from 'src/assets/audio-list';
import { AudioData } from '../interfaces';

describe('AudioService - сервис для поиска необходимой аудиозаписи из массива', () => {
  let service: AudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioService);
  });

  it('создаем сервис', () => {
    expect(service).toBeTruthy();
  });

  it('если Id совпадает возвращает аудио', () => {
    const id = 1;
    const expectedAudio = audioListMock.find(audio => audio.id === id) || null;
    const result = service.getAudio(id);
    expect(result).toEqual(expectedAudio);
  });

  it('если совпадений по Id нет возвращает null', () => {
    const id = 999;
    const result = service.getAudio(id);
    expect(result).toBeNull();
  });
});
