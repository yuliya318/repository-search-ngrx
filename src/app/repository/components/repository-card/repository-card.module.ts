import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryCardComponent } from './repository-card.component';



@NgModule({
  declarations: [RepositoryCardComponent],
  imports: [
    CommonModule
  ],
  exports: [RepositoryCardComponent]
})
export class RepositoryCardModule { }
