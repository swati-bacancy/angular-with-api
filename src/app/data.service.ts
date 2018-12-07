import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
    // return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get('http://localhost:3000/users/get_users')

  }

  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
