import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { selectSelectedRepository } from '../../../store/selectors/repository.selector';
import { GetRepository } from '../../../store/actions/repository.actions';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss']
})
export class RepositoryPageComponent implements OnInit {
  public repository$ = this._store.pipe(select(selectSelectedRepository));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new GetRepository(this._route.snapshot.params.id));
  }

}