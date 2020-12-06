import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubLogoModule } from '../../components/github-logo/github-logo.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { RepositoryCardModule } from '../../components/repository-card/repository-card.module';
import { RepositoryPageComponent } from './repository-page.component';



@NgModule({
  declarations: [RepositoryPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    GithubLogoModule,
    RepositoryCardModule
  ],
  exports: [RepositoryPageComponent]
})
export class RepositoryPageModule { }
