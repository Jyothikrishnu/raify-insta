import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeewsFeedContainerComponent } from 'src/app/components/neews-feed-container/neews-feed-container.component';
import { RouterModule } from '@angular/router';
import { NewsFeedComponent } from 'src/app/components/news-feed/news-feed.component';
import { CommonComponentModule } from 'src/app/components/common-comonent.module';

@NgModule({
  declarations: [
    NeewsFeedContainerComponent,
    // NewsFeedComponent
  ],
  imports: [
    CommonModule,
    CommonComponentModule,
    RouterModule.forChild([{path: '', component: NeewsFeedContainerComponent}])
  ]
})
export class NewsFeedsModule { }
