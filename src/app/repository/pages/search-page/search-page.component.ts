import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetRepositoriesAction } from '../../store/repository.actions';
import { repositoriesSelector } from '../../store/repository.selectors';
import { IRepositoriesList } from '../../interfaces/repositoriesList.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  public repositories$: Observable<IRepositoriesList>;

  public orderValue: string;
  public reverse = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.repositories$ = this.store.pipe(select(repositoriesSelector));
  }

  getRepositoriesList(searchValue: string): void {
    if (searchValue) {
      this.store.dispatch(GetRepositoriesAction({ searchValue }));
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

  trackByFn(index, item): number {
    return item.id;
  }
}
