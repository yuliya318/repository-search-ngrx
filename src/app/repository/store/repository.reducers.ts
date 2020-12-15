import { createReducer, on } from '@ngrx/store';
import { IRepository } from 'src/app/shared/interfaces/repository.interface';
import { IRepositoryState } from '../interfaces/repositoryState.interface';
import * as RepositoriesActions from './repository.actions';

export const repositoryFeatureKey = 'repository';

export interface State {
  repositoriesList: IRepository[],
  isLoading: boolean;
}

const initialState: State = {
  repositoriesList: [],
  isLoading: false
};

export const reducer = createReducer(
  initialState,
  on(RepositoriesActions.loadRepositories, (state, { searchValue }) => ({
      ...state,
      isLoading: true,
  })),
  on(RepositoriesActions.loadRepositoriesSuccess, (state, { repositoriesList }) => ({
      ...state,
      isLoading: false,
      repositoriesList,
  })),
  on(RepositoriesActions.loadRepositoriesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
);

export const selectRepositoriesList = (state: State) => state.repositoriesList;
export const selectIsLoading = (state: State) => state.isLoading;
