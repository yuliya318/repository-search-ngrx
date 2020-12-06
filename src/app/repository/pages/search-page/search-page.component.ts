import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRepository } from '../../../shared/interfaces/repository.interface';
import { IAppState } from '../../../store/state/app.state';
import { selectRepositoriesList } from '../../../store/selectors/repository.selector';
import { GetRepositories } from '../../../store/actions/repository.actions';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  public repositories$: Observable<IRepository[]> = this._store.pipe(
    select(selectRepositoriesList)
  );

  public orderValue: string;
  public reverse = false;

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit(): void {
    this.repositories$ = this._store.pipe(select(selectRepositoriesList));
  }

  getRepositoriesList(searchValue: any): void {
    if (searchValue) {
      this._store.dispatch(new GetRepositories(searchValue));
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
