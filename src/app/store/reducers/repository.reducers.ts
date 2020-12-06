import { ERepositoryActions } from './../actions/repository.actions';
import { RepositoryActions } from '../actions/repository.actions';
import { initialRepositoryState, IRepositoryState } from '../state/repository.state';

export const repositoryReducers = (
  state = initialRepositoryState,
  action: RepositoryActions
): IRepositoryState => {
  switch (action.type) {
    case ERepositoryActions.GetRepositoriesSuccess: {
      return {
        ...state,
        repositories: action.payload
      };
    }
    case ERepositoryActions.GetRepositorySuccess: {
      return {
        ...state,
        selectedRepository: action.payload
      };
    }

    default:
      return state;
  }
};
