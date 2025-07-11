import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-order-coffee',
  standalone: true,
  imports: [],
  templateUrl: './order-coffee.component.html',
  styleUrl: './order-coffee.component.scss'
})
/* Task_1🚨 = What is The implement ? You must search it and comment for me ! ⚠️ */
export class OrderCoffeeComponent implements OnInit {
  // For Beginner => *install nodejs  🚨 https://nodejs.org/en/download*
  // For Beginner => npm i -g  @angular/cli

  /* Task_2🚨 = What is The Constructor ? You must search it and comment for me ! ⚠️ */
  constructor() {
  }

  /* 🚨 for beginner 🚨 */
//***Lifecycle*** hooks ✅

// Called when any data-bound property of a directive changes
  ngOnChanges() {
  }

// Called once, after the first ngOnChanges
  /* ✅ Important*/
  ngOnInit() {
  }

// Called during every change detection run
  ngDoCheck() {
  }

// Called once after content (ng-content) has been projected into component
  ngAfterContentInit() {
  }

// Called after every check of projected content
  ngAfterContentChecked() {
  }

// Called once after the component's view (and child views) has been initialized
  /* ✅ Important*/
  ngAfterViewInit() {
  }

// Called after every check of the component's view (and child views)
  ngAfterViewChecked() {
  }

// Called just before the component is destroyed
  ngOnDestroy() {
  }

//
}
