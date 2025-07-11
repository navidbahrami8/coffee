import {Component, OnInit} from '@angular/core';
/* 🚨 Tools You Need That 🚨*/
/* 🔥 For Beginner 🔥*/
//  install nodejs  🔗https://nodejs.org/en/download  & 📌restart your system
//  npm i -g  @angular/cli
/* 🚀 And finally create your project. 🚀 */
// 🎉 ng new "app-name" (🎯 ✔️) next => ng generate component "component-name" (🎯 ✔️)
// 📌 When Installing => SSR false - Choice Scss or Css 🚀
//  Install Angular Material => 🔗https://material.angular.dev/guide/getting-started
@Component({
  //if you need it any place 💡in template(HTML) Example: 🚀<app-order-coffee/>
  selector: 'app-order-coffee',
  //Without Module ❌
  standalone: true,
  // Anything we need can be imported here. 🔧
  imports: [],
  // url html
  templateUrl: './order-coffee.component.html',
  // url  css or scss ...
  styleUrl: './order-coffee.component.scss'
})
/* Task_1🚨 = What is The 🔧implement🔧 ? You should search and leave me a comment.! ⚠️ */
export class OrderCoffeeComponent implements OnInit {

  /* Task_2🚨 = What is The Constructor ? You should search and leave me a comment.! ⚠️ */
  constructor() {
  }

  /* 🚨 for beginner 🚨 */
/*  📌Lifecycle📌  hooks ✅*/

// Called when any data-bound property of a directive changes
  ngOnChanges() {
  }

// Called once, after the first ngOnChanges
  /* 📌 Important 📌 */
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
  /* 📌 Important 📌 */
  ngAfterViewInit() {
  }

// Called after every check of the component's view (and child views)
  ngAfterViewChecked() {
  }

// Called just before the component is destroyed
  ngOnDestroy() {
  }

}
