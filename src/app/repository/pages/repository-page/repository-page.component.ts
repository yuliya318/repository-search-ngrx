import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRepository } from 'src/app/shared/interfaces/repository.interface';
// import { ActivatedRoute } from '@angular/router';
// import { select, Store } from '@ngrx/store';
// import { IAppState } from '../../../store/state/app.state';
// import { selectSelectedRepository } from '../../store/selectors/repository.selector';
// import { GetRepository } from '../../store/actions/repository.actions';
// import { repositorySelector } from '../../store/repository.selectors';
import * as RepositoriesActions from '../../store/repository.actions';
import * as RepositoriesSelectors from '../../store/repository.selectors';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss'],
})
export class RepositoryPageComponent implements OnInit {
  // public repository$: Observable<IRepository>;

  public repository$: Observable<any>;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  )
  {}

  ngOnInit(): void {
    this.repository$ = this.store.pipe(
      select(
        RepositoriesSelectors.selectCurrentRepositoryById(
          +this.route.snapshot.params.id
        )
      )
    );
    // this._store.dispatch(new GetRepository(this._route.snapshot.params.id));
  }

  initializeValues(): void {
    // this.repository$ = this.store.pipe(select(repositorySelector));
  }
}
