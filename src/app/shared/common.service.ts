import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
 
  constructor(private http: HttpClient) { }
  
  public getcountry(){
    let countyUrl='https://restcountries.eu/rest/v2';
    return this.http.get(countyUrl);
  }
  
}
