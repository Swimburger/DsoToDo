import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/api/task-lists/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getTaskLists(): Observable<any> {
    return this.http.get(endpoint).pipe(map(this.extractData));
  }

  getTaskList(id): Observable<any> {
    return this.http.get(endpoint + id).pipe(map(this.extractData));
  }

  addTaskList(taskList): Observable<any> {
    return this.http.post<any>(endpoint, JSON.stringify(taskList), httpOptions).pipe(
      tap((taskList) => console.log(`added taskList w/ id=${taskList.id}`)),
      catchError(this.handleError<any>('addtaskList'))
    );
  }

  updateTaskList(id, taskList): Observable<any> {
    return this.http.post(endpoint + id, JSON.stringify(taskList), httpOptions).pipe(
      tap(_ => console.log(`updated taskList id=${id}`)),
      catchError(this.handleError<any>('updatetaskList'))
    );
  }

  deleteTaskList(id): Observable<any> {
    return this.http.delete<any>(endpoint + id, httpOptions).pipe(
      tap(_ => console.log(`deleted taskList id=${id}`)),
      catchError(this.handleError<any>('deletetaskList'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
