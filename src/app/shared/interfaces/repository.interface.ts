import { IRepositoryOwner } from './repositoryOwner.interface';

export interface IRepository {
    id: number;
    name: string;
    updated_at: string;
    created_at: string;
    owner: IRepositoryOwner;
    description: string;
    html_url: string;
}