import { RouterReducerState } from '@ngrx/router-store';

import { IRepositoryState, initialRepositoryState } from './repository.state';


export interface IAppState {
  router?: RouterReducerState;
  repositories: IRepositoryState;
}

export const initialAppState: IAppState = {
  repositories: initialRepositoryState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
