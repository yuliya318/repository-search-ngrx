import { IRepository } from 'src/app/shared/interfaces/repository.interface';

export interface IRepositoryState {
  repositories: IRepository[] | null;
  selectedRepository: IRepository | null;
}

export const initialRepositoryState: IRepositoryState = {
  repositories: null,
  selectedRepository: null
};
