import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class HelloWorld {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHello() {

    return this.http.get<HelloWorld>('http://localhost:8080/hello');
    // console.log("Execute WelcomeData Service")
  }
}
