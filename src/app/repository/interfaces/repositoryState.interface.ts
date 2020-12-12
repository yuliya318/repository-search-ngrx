import { IRepository } from 'src/app/shared/interfaces/repository.interface';
export interface IRepositoryState {
    repositories: IRepository[] | null;
    repository: IRepository | null;
}