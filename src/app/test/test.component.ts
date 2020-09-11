import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  namelist =["mohamed","ala","sami","basma"] ;

  ngOnInit(): void {
  }
  //test
  onClick(){
  alert("Hello world") ;
  }

}
