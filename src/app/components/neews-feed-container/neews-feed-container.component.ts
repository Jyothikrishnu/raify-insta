import { Component, OnInit } from '@angular/core';
import { NewsFeedsService } from 'src/app/services/news-feeds.service';
import { environment } from 'src/environments/environment';
import { Article } from 'src/app/models/article';
import { ScrollEvent } from 'ngx-scroll-event';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-neews-feed-container',
  templateUrl: './neews-feed-container.component.html',
  styleUrls: ['./neews-feed-container.component.scss']
})
export class NeewsFeedContainerComponent implements OnInit {

  articles: Array<Article>;
  pageNo: number;
  subs: Subscription;
  dataSubs: Subscription;
  constructor(
    private newsFeedsService: NewsFeedsService
  ) { }

  ngOnInit() {
    this.pageNo = 1;
    this.articles = [];
    this.setTobottomSubs();
    this.fetchData(this.pageNo);
  }

  fetchData(page: number){
    this.dataSubs = this.newsFeedsService.getNews(
      {
        apiKey: environment.apiKey,
        page: page,
        pageSize: 30,
        q: "bitcoin"
      }
    ).subscribe(data => {
      console.log("DATA ---", data);
      this.articles = [ ...this.articles,  ...data.articles]
    })
  }

  setTobottomSubs(){
    this.subs = this.newsFeedsService.reachedBottom.subscribe(res =>{
      if(res){
        this.fetchData(++this.pageNo);
      }
    })
  }

  ngOnDestroy(){
    if(this.dataSubs){
      this.dataSubs.unsubscribe();
    }
    if(this.subs){
      this.subs.unsubscribe();
    }
  }

}




