import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IRepository } from '../../../shared/interfaces/repository.interface';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryCardComponent implements OnInit {
  @Input() repository: IRepository;

  constructor() { }

  ngOnInit(): void {
  }

}
