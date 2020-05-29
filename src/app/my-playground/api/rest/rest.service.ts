import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


/**
 * Rest Service that connects with the Backend API
 */
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  // End point of the backend server
  private endpoint = 'http://jsonplaceholder.typicode.com/';

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  /**
   *   Gets the total number of courses
   */
  getComments(): Observable<any> {
    return this.http.get(this.endpoint + 'posts');
}

  /**
   * Gets all the teachers available
   *
  getTeachers(): Observable<any> {
    return this.http.get(this.endpoint + 'teachers');
  }
  */

  /**
   * Get all the active Courses paginated and ordered by title
   * @param page     Offset - Number of the first element of the current page
   * @param pageSize Limit - Number of elements per page
   *
  getCoursesCatalogue(page: number, pageSize: number): Observable<any> {
    return this.http.get(this.endpoint + `courses/catalogue/${page}/${pageSize}`);
  }
  */

  /**
   * Inserts a new course
   * @param course New course

  addCourse(course: CourseModel): Observable<any> {
    console.log(course);
    return this.http.post<any>(this.endpoint + 'courses/new', JSON.stringify(course), this.httpOptions).pipe(
      tap(() => console.log(`added course w/ id=${course.title}`)),
      catchError(this.handleError<any>('addCourse'))
    );
  }
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to somewhere
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
