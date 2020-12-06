import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IRepository } from '../../../shared/interfaces/repository.interface';

@Component({
  selector: 'app-repository-list-item',
  templateUrl: './repository-list-item.component.html',
  styleUrls: ['./repository-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryListItemComponent implements OnInit {
  @Input() repository: IRepository;

  constructor() { }

  ngOnInit(): void {
  }

}
