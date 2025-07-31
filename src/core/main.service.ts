import {DestroyRef, inject} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpParams, HttpRequest} from '@angular/common/http';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Observable, Subject} from 'rxjs';

export abstract class MainService {
  protected http = inject(HttpClient);
  httpRequest<T>(method: 'GET' | 'HEAD'|'POST' | 'PUT', url: string, data?: any): HttpRequest<T> {
    return new HttpRequest<T>(method, url, (data ? data : undefined), {
      responseType: 'json',
      params: new HttpParams({
        fromObject: {data}
      })
    })
  }

  request<T>(httpRequest: HttpRequest<T>) {
    let data = new Subject<T>();
    this.http.request(httpRequest).pipe(takeUntilDestroyed(this.destroyedRef)).subscribe({
      next: (res) => {
        data.next(res as T);
      },
      error: (error: HttpErrorResponse) => {
        data.error(error);
      }
    })
    return data.asObservable()
  }

  protected destroyedRef = inject(DestroyRef);
}
