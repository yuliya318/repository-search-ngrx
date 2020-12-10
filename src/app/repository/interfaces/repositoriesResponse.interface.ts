import { IRepositoriesList } from "./repositoriesList.interface";

export interface IRepositoriesResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IRepositoriesList;
}
