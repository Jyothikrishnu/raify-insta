import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Article } from 'src/app/models/article';
import { NewsFeedsService } from 'src/app/services/news-feeds.service';

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit, OnChanges {

  @Input() param:{article: Article, isBookMark?: boolean}

  icon: string = `https://png.pngtree.com/element_our/sm/20180626/sm_5b321ca31d522.jpg`;
  image: string;
  readMoreText: string;
  limit: number;
  isEnable: boolean;
  articles: Article;
  disableBookmark: boolean;
  constructor(
    private newsFeedsService: NewsFeedsService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.articles = this.param.article;
    this.disableBookmark = this.param.isBookMark || false;
    this.isEnable = false;
    this.limit = 50;
    this.readMoreText = "Read More";
    this.image = this.articles.urlToImage
  }

  readMore(event){
    if(!this.isEnable){
      this.limit = this.articles.description ? this.articles.description.length : 50;
      this.readMoreText = "Read Less"
    } else {
      this.readMoreText = "Read More"
      this.limit = 50
    }
    this.isEnable = !this.isEnable;
  }

  bookmark(event){
    this.newsFeedsService.setBookmark(this.articles);
    alert("Added to Bookmarks")
  }


}
