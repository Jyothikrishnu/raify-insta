import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { TrimPipe } from '../pipes/trim.pipe';
import { ScrollEventModule } from 'ngx-scroll-event';

@NgModule({
  declarations: [
    NewsFeedComponent,
    TrimPipe
  ],
  imports: [
    CommonModule,
    ScrollEventModule
  ],
  exports:[
    NewsFeedComponent,
    TrimPipe
  ]
})
export class CommonComponentModule { }
