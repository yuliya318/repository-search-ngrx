import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() search = new EventEmitter<string>();
  @ViewChild('searchInput', {static: true}) input: ElementRef;

  searchInputSubscribtion: Subscription = new Subscription();

  constructor() {
  }

  ngOnInit(): void {
    this.searchInputSubscribtion = fromEvent(this.input.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value.toLowerCase().trim()),
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe((inputValue) => {
        this.search.emit(inputValue);
      });
  }


  ngOnDestroy() {
    if (this.searchInputSubscribtion) {
      this.searchInputSubscribtion.unsubscribe();
    }
  }
}
