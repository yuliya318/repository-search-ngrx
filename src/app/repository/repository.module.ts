import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { RepositoryPageModule } from './pages/repository-page/repository-page.module';
import { RepositoryListItemModule } from './components/repository-list-item/repository-list-item.module';
import { SearchModule } from './components/search/search.module';
import { OrderByPipe } from './pipes/order-by.pipe';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/repository.reducers';
import { RepositoryService } from './services/repository.service';
import { EffectsModule } from '@ngrx/effects';
import { RepositoriesEffect } from './store/repository.effects';


const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
];

@NgModule({
  declarations: [SearchPageComponent, OrderByPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RepositoryPageModule,
    RepositoryListItemModule,
    SearchModule,
    StoreModule.forFeature('repository', reducers),
    EffectsModule.forFeature([RepositoriesEffect])
  ],
  providers: [RepositoryService],
  exports: [SearchPageComponent],
})
export class RepositoryModule {}
