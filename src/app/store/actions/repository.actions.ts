import { Action } from '@ngrx/store';

import { IRepository } from '../../shared/interfaces/repository.interface';

export enum ERepositoryActions {
  GetRepositories = '[Repository] Get Repositories',
  GetRepositoriesSuccess = '[Repository] Get Repositories Success',
  GetRepository = '[Repository] Get Repository',
  GetRepositorySuccess = '[Repository] Get Repository Success'
}

export class GetRepositories implements Action {
  public readonly type = ERepositoryActions.GetRepositories;
  constructor(public payload: string) {}
}

export class GetRepositoriesSuccess implements Action {
  public readonly type = ERepositoryActions.GetRepositoriesSuccess;
  constructor(public payload: IRepository[]) {}
}

export class GetRepository implements Action {
  public readonly type = ERepositoryActions.GetRepository;
  constructor(public payload: number) {}
}

export class GetRepositorySuccess implements Action {
  public readonly type = ERepositoryActions.GetRepositorySuccess;
  constructor(public payload: IRepository) {}
}

export type RepositoryActions = GetRepositories | GetRepositoriesSuccess | GetRepository | GetRepositorySuccess;
 