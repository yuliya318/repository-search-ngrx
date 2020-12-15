import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as RepositoriesActions from '../../store/repository.actions';
import * as RepositoriesSelectors from '../../store/repository.selectors';
import { IRepository } from '../../../shared/interfaces/repository.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  public repositories$: Observable<IRepository[]>;

  public orderValue: string;
  public reverse = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.repositories$ = this.store.pipe(select(RepositoriesSelectors.selectRepositoriesList));
  }

  trackByFn(index, item): number {
    return item.id;
  }

  getRepositoriesList(searchValue: string): void {
    if (searchValue) {
      this.store.dispatch(RepositoriesActions.loadRepositories({ searchValue }));
    } else {
      this.orderValue = '';
    }
  }

  setOrderValue(value: string): void {
    if (this.orderValue === value) {
      this.reverse = !this.reverse;
    }
    this.orderValue = value.toLowerCase();
  }

  selectCurrrentRepositoryId(id: number): void {
    // this.store.dispatch(RepositoriesActions.selectCurrentRepositoryId({ id }));
  }
}
