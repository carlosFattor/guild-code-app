import { Injectable } from '@angular/core';
import { StorageArgumentFunction } from './storage-argument-function.type';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly STORAGE_KEY = 'guild-code';

  localStorage<T>(identifier: string | null, callback: StorageArgumentFunction<T | null> = data => data): T | null {
    return this.treatStorage<T>(identifier, localStorage, callback);
  }

  private treatStorage<StorageType>(
    identifier: string | null,
    storage: Storage,
    callback: StorageArgumentFunction<StorageType | null>
  ): StorageType | null {
    const serialized = storage.getItem(this.STORAGE_KEY);
    let parsed = null;
    if (serialized) {
      parsed = JSON.parse(serialized);
    }
    let edited: StorageType | null = null;
    if (!!identifier && parsed) {
      edited = callback(parsed[identifier]);
      parsed[identifier] = edited;
    } else {
      edited = callback(parsed);
      parsed = edited;
    }
    storage.setItem(this.STORAGE_KEY, JSON.stringify(parsed));
    return edited;
  }
}
