import { createReducer, on, Action } from '@ngrx/store';
import { IRepositoryState } from '../interfaces/repositoryState.interface';
import { GetRepositoriesAction, GetRepositoriesSuccessAction, GetRepositorySuccessAction } from './repository.actions';

const initialState: IRepositoryState = {
  repositories: null,
  repository: null,
};

const repositoryReducer = createReducer(
  initialState,
  on(
    GetRepositoriesSuccessAction,
    (state, action): IRepositoryState => ({
      ...state,
      repositories: action.repositoriesList
    })
  ),
  on(
    GetRepositorySuccessAction,
    (state, action): IRepositoryState => ({
      ...state,
      repository: action.repository
    })
  )
);

export function reducers(state: IRepositoryState, action: Action) {
  return repositoryReducer(state, action);
}
