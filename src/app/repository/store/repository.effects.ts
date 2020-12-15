import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { RepositoryService } from '../services/repository.service';
import * as RepositoriesActions from './repository.actions';
import { select, Store } from '@ngrx/store';
import { IRepository } from '../../shared/interfaces/repository.interface';

@Injectable()
export class RepositoriesEffect {
  loadRepositories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepositoriesActions.loadRepositories),
      switchMap(({ searchValue }) => {
        return this.repositoryService.getRepositories(searchValue).pipe(
          map((repositoriesList: IRepository[]) => {
            return RepositoriesActions.loadRepositoriesSuccess({
              repositoriesList,
            });
          })
        );
      })
    )
  );

  // repository$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(GetRepositoryAction),
  // map(action => action.payload),
  //     withLatestFrom(this.store.pipe(select(repositoriesSelector))),
  //     switchMap(([{repositories: IRepository[]}, repositoryID]) => {
  //       const selectedRepository = repositories.filter(
  //         (repository) => repository.id === repositoryID
  //       )[0];
  //       return GetRepositorySuccessAction({ selectedRepository });
  //     })
  //   )
  // );

  constructor(
    private actions$: Actions,
    private store: Store,
    private repositoryService: RepositoryService
  ) {}
}
