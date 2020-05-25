import { Injectable } from '@angular/core';

export interface LocalData{
  key: storageKey,
  data: any

}

export enum storageKey {
  BOOKMARKS = 'BOOKMARKS'
}


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setLocalData(localData: LocalData) {
    localStorage.setItem(localData.key, JSON.stringify(localData.data));
  }

  getLocalData(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }


}
