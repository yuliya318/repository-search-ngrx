import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryListItemComponent } from './repository-list-item.component';
import { AppRoutingModule } from '../../../app-routing.module';



@NgModule({
  declarations: [RepositoryListItemComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [RepositoryListItemComponent]
})
export class RepositoryListItemModule { }
