import { createAction, props } from '@ngrx/store';
import { IRepositoriesList } from '../interfaces/repositoriesList.interface';
import { IRepository } from '../../shared/interfaces/repository.interface';

export enum ERepositoryActions {
  GetRepositories = '[Repository] Get Repositories',
  GetRepositoriesSuccess = '[Repository] Get Repositories Success',
  GetRepository = '[Repository] Get Repository',
  GetRepositorySuccess = '[Repository] Get Repository Success',
}

export const GetRepositoriesAction = createAction(
  ERepositoryActions.GetRepositories,
  props<{ searchValue: string }>()
);

export const GetRepositoriesSuccessAction = createAction(
  ERepositoryActions.GetRepositoriesSuccess,
  props<{ repositoriesList: IRepositoriesList }>()
);

export const GetRepositoryAction = createAction(
  ERepositoryActions.GetRepository,
  props<{ repositoryID: number }>()
);

export const GetRepositorySuccessAction = createAction(
  ERepositoryActions.GetRepositorySuccess,
  props<{ repository: IRepository }>()
);
