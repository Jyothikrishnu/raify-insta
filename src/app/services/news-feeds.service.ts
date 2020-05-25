import { Injectable } from '@angular/core';
import { ApiBaseService } from './api-base.service';
import { GetParams } from '../models/get-params';
import { ApiResponse } from '../models/api-response';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StorageService, storageKey } from 'src/app/services/storage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedsService {
  readonly url: string = 'everything';
  private reachedBottom$ = new BehaviorSubject<boolean>(false);

  constructor(
    private apiService: ApiBaseService,
    private httpClient: HttpClient,
    private storageService: StorageService
  ) { }

  get reachedBottom(){
    return this.reachedBottom$.asObservable();
  }

  setReachedBottom(){
    this.reachedBottom$.next(true);
  }

  getNews(params1: GetParams){
    // return this.apiService.get<ApiResponse<Array<Article>>>(this.url, params1)

    let url = "assets/dummyData/news.json"

    return this.httpClient.get<ApiResponse<Array<Article>>>(url, {params: {
    'apiKey': params1.apiKey,
    'pageSize': params1.pageSize.toString(),
    'page': params1.page.toString(),
    'q': params1.q,
    }})
  }

  setBookmark(article: Article){
    let currentBookmarks = this.storageService.getLocalData(storageKey.BOOKMARKS) ? [... this.storageService.getLocalData(storageKey.BOOKMARKS)] : [];

    if( currentBookmarks.indexOf(article) < 0){
      currentBookmarks.push(article);
      this.storageService.setLocalData({
        key: storageKey.BOOKMARKS,
        data: currentBookmarks
      })
    }
  }
}
