import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryPageComponent } from './repository/pages/repository-page/repository-page.component';
import { SearchPageComponent } from './repository/pages/search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchPageComponent },
  { path: 'repository/:id', component: RepositoryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}