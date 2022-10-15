import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/app/shared/Models/product';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl;
  ngOnInit(): void {
  }
  get404Error(){
    this.http.get(this.baseUrl + 'products/42').subscribe(response => {
      console.log(response);
    }, error => {console.log(error);}
    );
  }
  get500Error(){
    this.http.get(this.baseUrl + 'Buggy/servererror').subscribe(response => {
      console.log(response);
    }, error => {console.log(error);}
    );
  }
  get400Error(){
    this.http.get(this.baseUrl + 'Buggy/badrequest').subscribe(response => {
      console.log(response);
    }, error => { console.log(error); }
    );
  }
  get400ValidationError(){
    this.http.get(this.baseUrl + 'products/fortytwo').subscribe(response => {
      console.log(response);
    }, error => {console.log(error);}
    );
  }
}
