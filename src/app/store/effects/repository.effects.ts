import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  ERepositoryActions,
  GetRepositories,
  GetRepositoriesSuccess,
  GetRepository,
} from '../actions/repository.actions';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { IRepositoriesList } from '../../shared/interfaces/repositories-list.interface';
import { selectRepositoriesList } from '../selectors/repository.selector';
import { GetRepositorySuccess } from '../actions/repository.actions';

@Injectable()
export class RepositoryEffects {
  @Effect()
  GetRepository$ = this._actions$.pipe(
    ofType<GetRepository>(ERepositoryActions.GetRepository),
    map((action) => action.payload),
    withLatestFrom(this._store.pipe(select(selectRepositoriesList))),
    switchMap(([id, repositories]) => {
      const selectedRepository = repositories.filter(
        (repository) => repository.id === +id
      )[0];
      return of(new GetRepositorySuccess(selectedRepository));
    })
  );

  @Effect()
  GetRepositories$ = this._actions$.pipe(
    ofType<GetRepositories>(ERepositoryActions.GetRepositories),
    map((action) => action.payload),
    switchMap((payload) => this._repositoryService.getRepositories(payload)),
    switchMap((repositoriesList: IRepositoriesList) =>
      of(new GetRepositoriesSuccess(repositoriesList.repositories))
    )
  );

  constructor(
    private _repositoryService: RepositoryService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
