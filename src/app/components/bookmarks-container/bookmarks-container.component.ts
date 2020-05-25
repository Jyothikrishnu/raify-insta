import { Component, OnInit } from '@angular/core';
import { NewsFeedsService } from 'src/app/services/news-feeds.service';
import { StorageService, storageKey } from 'src/app/services/storage.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks-container.component.html',
  styleUrls: ['./bookmarks-container.component.scss']
})
export class BookmarksContainerComponent implements OnInit {

  articles: Array<Article>
  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.articles = this.storageService.getLocalData(storageKey.BOOKMARKS) ? [...this.storageService.getLocalData(storageKey.BOOKMARKS)] : [];
  }

}
