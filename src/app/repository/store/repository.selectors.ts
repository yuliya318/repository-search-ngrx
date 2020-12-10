import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IAppState } from '../../shared/interfaces/appState.interface';
import { IRepositoryState } from '../interfaces/repositoryState.interface';

export const repositoryFeatureSelector = createFeatureSelector<
  IAppState,
  IRepositoryState
>('repository')

export const repositoriesSelector = createSelector(
    repositoryFeatureSelector,
  (repositoryState: IRepositoryState) => repositoryState.repositories
)

export const repositorySelector = createSelector(
    repositoryFeatureSelector,
  (repositoryState: IRepositoryState) => repositoryState.repository
)