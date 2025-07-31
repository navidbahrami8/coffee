import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MainService} from '../../../../core/main.service';
/* Task_1🚨 = What is The 🔧Injectable🔧 ? You should search🔍 and leave me a comment.! ⚠️ */
@Injectable({
  /* Task_2🚨 = What is The 🔧providedIn :1. root 2. platform🔧 ? You should search🔍 and leave me a comment.! ⚠️ */
  providedIn: 'root'
})
//  "npm g s name service"  In Your Terminal VsCode,WebStorm or system's CMD,PowerShell
export class TestService extends  MainService{
  /* 💉inject(👀) */
readonly  BaseUrl = 'http://localhost:3000';

  getTest(): HttpRequest<any> {
    // return this.http.get(`${this.BaseUrl}/test`);
    return this.httpRequest('GET',`${this.BaseUrl}/test`)
  }
}
