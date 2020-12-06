import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IRepositoryState } from '../state/repository.state';

const selectRepositories = (state: IAppState) => state.repositories;

export const selectRepositoriesList = createSelector(
  selectRepositories,
  (state: IRepositoryState) => state.repositories
);

export const selectSelectedRepository = createSelector(
  selectRepositories,
  (state: IRepositoryState) => state.selectedRepository
);
