import { IRepository } from 'src/app/shared/interfaces/repository.interface';
import { IRepositoriesList } from './repositoriesList.interface';
export interface IRepositoryState {
    repositories: IRepositoriesList | null;
    repository: IRepository | null;
}