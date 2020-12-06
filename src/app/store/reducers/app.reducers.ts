import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { repositoryReducers } from './repository.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  repositories: repositoryReducers
};
