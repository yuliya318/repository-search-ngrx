import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubLogoModule } from '../../../shared/modules/github-logo/github-logo.module';
import { RepositoryCardModule } from '../../components/repository-card/repository-card.module';
import { RepositoryPageComponent } from './repository-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'repository/:id', component: RepositoryPageComponent },
];

@NgModule({
  declarations: [RepositoryPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GithubLogoModule,
    RepositoryCardModule
  ],
  exports: [RepositoryPageComponent]
})
export class RepositoryPageModule { }
