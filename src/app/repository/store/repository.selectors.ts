import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../../shared/interfaces/appState.interface';
import { IRepositoryState } from '../interfaces/repositoryState.interface';
import * as fromRepository from './repository.reducers';

export const selectRepositoryState = createFeatureSelector<fromRepository.State>(
  fromRepository.repositoryFeatureKey
);

// export const repositoryFeatureSelector = createFeatureSelector<
//   IAppState,
//   IRepositoryState
// >('repository');

// export const repositoriesSelector = createSelector(
//   selectRepositoryState,
//   (repositoryState: IRepositoryState) => repositoryState.repositories
// );

// export const repositorySelector = createSelector(
//   selectRepositoryState,
//   (repositoryState: IRepositoryState) => repositoryState.repository
// );

export const selectRepositoriesList = createSelector(
  selectRepositoryState,
  fromRepository.selectRepositoriesList
);

export const selectIsLoading = createSelector(
  selectRepositoryState,
  fromRepository.selectIsLoading
);

export const selectCurrentRepositoryById = (id: number) =>
  createSelector(selectRepositoriesList, (repositoriesList) =>
    repositoriesList.find((repository) => repository.id === id)
  );
