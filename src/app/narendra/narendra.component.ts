import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './narendra.component.html',
  styleUrls: ['./narendra.component.css']
})
export class NarendraComponent implements OnInit {

person ='';
  constructor() { }

  ngOnInit() {
	  this.person='narendra';
  }

}
