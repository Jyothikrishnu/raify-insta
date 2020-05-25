import { Component } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { NewsFeedsService } from './services/news-feeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private newsFeedsService: NewsFeedsService
  ){}

  title = 'riafy-insta';

  handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
        console.log('bottom');
        this.newsFeedsService.setReachedBottom();
      }
    }

  }
}
