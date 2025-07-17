import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {CoffeeForm} from './order-coffee.model';

/* 🚨 Tools You Need  🚨*/
/* 🔥 For Beginner 🔥*/
// You should know a little bit of HTML and Css 📌
//  install node js  🔗https://nodejs.org/en/download 🔧 & 📌 restart your system
//  install VsCode or WebStorm or ... for use code 🔧  google🔍
//  "npm i -g  @angular/cli"   In Your Terminal VsCode,WebStorm or system's CMD,PowerShell
/* 🧠 If(see red test (ERROR)) {You have new learning} 🧠*/
/* 🚀 And finally create your project. 🚀 */
// 🎉 ng new "app-name" (🎯 ✔️) next => ng generate component "component-name" (🎯 ✔️)
// 📌 When it's Creating => SSR false - Choice Scss or Css 🚀


//  Install Angular Material => 🔗 https://material.angular.dev/guide/getting-started
@Component({
  //if you need this component any place '💡in template(HTML)' Example: 🚀<app-order-coffee/>
  selector: 'app-order-coffee',
  //Without Module ❌
  standalone: true,
  // Anything we need can be imported here. 🔧
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, ReactiveFormsModule],
  // url html
  templateUrl: './order-coffee.component.html',
  // url  css or scss ...
  styleUrl: './order-coffee.component.scss'
})
/* Task_1🚨 = What is The 🔧implements🔧 ? You should search🔍 and leave me a comment.! ⚠️ */
export class OrderCoffeeComponent implements OnInit {
  // form!: FormGroup
  form: CoffeeForm = new CoffeeForm()

  /* Task_2🚨 = What is The Constructor ? You should search🔍 and leave me a comment.! ⚠️ */
  constructor() {
  }

  /* 🚨 for beginner 🚨 */
  /*  📌Lifecycle📌  hooks ✅*/

  // Called when any data-bound property of a directive changes  1
  ngOnChanges() {
  }

  // Called once, after the first ngOnChanges 2
  /* 📌 Important 📌 */
  ngOnInit() {
    // let obj = {
    //   name: document.getElementById('name'),
    //   count: document.getElementById('count'),
    // }
    // this.form = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   count: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // })
    this.form = new CoffeeForm()
  }

  // Called during every change detection run 3
  ngDoCheck() {
  }

  // Called once after content (ng-content) has been projected into component 4
  ngAfterContentInit() {
  }

  // Called after every check of projected content 5
  ngAfterContentChecked() {
  }

  // Called once after the component's view (and child views) has been initialized 6
  /* 📌 Important 📌 */
  ngAfterViewInit() {
  }

  // Called after every check of the component's view (and child views) 7
  ngAfterViewChecked() {
  }

  // Called just before the component is destroyed 8
  ngOnDestroy() {
  }

  save() {
    console.log(this.form.value);
  }

  protected readonly FormControl = FormControl;
}
