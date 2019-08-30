import {Component, OnInit, ViewChild} from '@angular/core';
import {AnyAbstractClass} from './any-abstract-class';
import {MyListComponent} from './my-list.component';

@Component({
  selector: 'app-root',
  template: `      
    <my-list></my-list>
  `
})
export class AppComponent extends AnyAbstractClass implements OnInit{

  @ViewChild(MyListComponent, {static: true}) myList;

  ngOnInit(): void {
    super.ngOnInit();
  }

}
