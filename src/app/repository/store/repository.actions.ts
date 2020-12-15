import { createAction, props } from '@ngrx/store';
import { IRepository } from '../../shared/interfaces/repository.interface';

export const loadRepositories = createAction(
  '[Repository/API] Load Repositories',
  props<{ searchValue: string }>()
);
export const loadRepositoriesSuccess = createAction(
  '[Repository/API] Load Repositories Success',
  props<{ repositoriesList: IRepository[] }>()
);
export const loadRepositoriesFailure = createAction(
  '[Repository/API] Load Repositories Failure',
  props<{ error: any }>()
);

export const selectCurrentRepositoryId = createAction(
  '[Repository] Select Current Repository Id',
  props<{ id: number | null }>()
);
