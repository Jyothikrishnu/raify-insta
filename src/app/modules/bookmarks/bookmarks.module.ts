import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookmarksContainerComponent } from 'src/app/components/bookmarks-container/bookmarks-container.component';
import { CommonComponentModule } from 'src/app/components/common-comonent.module';

@NgModule({
  declarations: [
    BookmarksContainerComponent
  ],
  imports: [
    CommonModule,
    CommonComponentModule,
    RouterModule.forChild([{path: '', component: BookmarksContainerComponent}])
  ]
})
export class BookmarksModule { }
