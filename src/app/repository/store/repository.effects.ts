import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { RepositoryService } from '../services/repository.service';
import {
  GetRepositoriesAction,
  GetRepositoriesSuccessAction,
} from './repository.actions';
import { IRepositoriesList } from '../interfaces/repositoriesList.interface';
import { GetRepositoryAction } from './repository.actions';
import { select, Store } from '@ngrx/store';
import { repositoriesSelector } from './repository.selectors';

@Injectable()
export class RepositoriesEffect {
  repositories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetRepositoriesAction),
      switchMap(({ searchValue }) => {
        return this.repositoryService.getRepositories(searchValue).pipe(
          map((repositoriesList: IRepositoriesList) => {
            return GetRepositoriesSuccessAction({ repositoriesList });
          })
        );
      })
    )
  );

  // repository$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(GetRepositoryAction),
  //     // map(action => action.payload),
  //     withLatestFrom(this.store.pipe(select(repositoriesSelector))),
  //     switchMap(([repositoryID, repositories]) => {
  //       const selectedRepository = repositories.filter(
  //         (repository) => repository.id === repositoryID
  //       )[0];
  //       return GetRepositoryAction({ selectedRepository });
  //     })
  //   )
  // );

  constructor(
    private actions$: Actions,
    private store: Store,
    private repositoryService: RepositoryService
  ) {}
}
