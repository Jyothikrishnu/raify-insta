import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news-feeds/news-feeds.module').then(m => m.NewsFeedsModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('./modules/bookmarks/bookmarks.module').then(m => m.BookmarksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
