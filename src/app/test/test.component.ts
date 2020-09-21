import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  constructor(private data : DataService) { }

  namelist =["mohamed","ala","sami","basma"] ;
  dataList = [] ;

  ngOnInit(): void {
    this.dataList = this.data.getData() ;
  }
  //test
  onClick(){
  alert("Hello world") ;
  }

}
