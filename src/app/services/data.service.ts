import { Injectable } from '@angular/core';
import {HttpClientModule } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private  configUrl = "https://jsonplaceholder.typicode.com/users" ;
  constructor(private http : HttpClientModule ) { }
  getData() {
    return [
      {name : "mohamed" , age : 21},
      {name : "sami" , age : 55},
      {name : "basma" , age : 47}
    ]
  }
  getNames() {
    //let name = this.http.get(this.configUrl);
    return name ;
  }
}
