import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRepositoriesList } from '../interfaces/repositories-list.interface';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private _http: HttpClient) { }

  getRepositories(searchValue: string): Observable<IRepositoriesList> {
    return this._http.get<IRepositoriesList>(environment.apiUrl + searchValue).pipe(map((data: any) => data.items));
  }
}
