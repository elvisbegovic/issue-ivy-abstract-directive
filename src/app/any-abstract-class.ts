import {Directive, OnInit} from '@angular/core';
import {MyListComponent} from './my-list.component';

@Directive()
export abstract class AnyAbstractClass implements OnInit {

    abstract myList: MyListComponent;

    ngOnInit(): void {

        console.log("At first build this @ViewChild is available : "+this.myList.name);

        console.log("If you comment this line, you will see this.myList is not available.");

        console.log("");
        console.log("");
        console.log("");
        // if you change anywhing in this file and save,
        // CLI compile successfully and browser refresh but this.myList is no more available
        // you need restart CLI

    }

}