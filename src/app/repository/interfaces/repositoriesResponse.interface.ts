import { IRepository } from '../../shared/interfaces/repository.interface';

export interface IRepositoriesResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IRepository[];
}
