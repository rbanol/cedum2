import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CourseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourseProvider {

  constructor(public http: HttpClient) {
    
  }
  
  listarCursos(){
	  return this.http.get('http://localhost:3000/db');
  }
}
