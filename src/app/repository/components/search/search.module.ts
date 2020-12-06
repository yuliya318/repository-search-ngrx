import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { GithubLogoModule } from '../github-logo/github-logo.module';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    GithubLogoModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
