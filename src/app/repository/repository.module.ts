import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { RepositoryPageModule } from './pages/repository-page/repository-page.module';
import { RepositoryListItemModule } from './components/repository-list-item/repository-list-item.module';
import { SearchModule } from './components/search/search.module';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [SearchPageComponent, OrderByPipe],
  imports: [
    CommonModule,
    AppRoutingModule,
    RepositoryPageModule,
    RepositoryListItemModule,
    SearchModule,
  ],
  exports: [SearchPageComponent],
})
export class RepositoryModule {}
