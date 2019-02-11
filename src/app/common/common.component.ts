import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  commondata: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('user').
    subscribe(data => {
        this.commondata = data;
        console.log(this.commondata);
    });
  }


}
