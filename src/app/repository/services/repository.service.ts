import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRepository } from '../../shared/interfaces/repository.interface';
import { IRepositoriesResponse } from '../interfaces/repositoriesResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient) {}

  getRepositories(searchValue: string): Observable<IRepository[]> {
    return this.http
      .get<IRepositoriesResponse>(environment.apiUrl + searchValue)
      .pipe(map((response: IRepositoriesResponse) => response.items));
  }
}
