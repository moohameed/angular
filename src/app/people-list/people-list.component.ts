import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  constructor() { }
  // just for test 
  peropleList =[
    {
      id : 1 ,
      firstname : "mohamed" ,
      lastname :"trabelsi" ,
      phone : 58203033 ,
    },
    {
      id : 2 ,
      firstname : "sami" ,
      lastname :"trabelsi" ,
      phone : 28203033 ,
    },
    {
      id : 3 ,
      firstname : "ala" ,
      lastname :"trabelsi" ,
      phone : 98203033 ,
    }
  ] ;

  //end of test


  ngOnInit(): void {
    
   
  }
  //this function is used to delet item from array list 
  delet (item){
    let index =this.peropleList.indexOf(item) ;
    this.peropleList.splice(index,1) ;
  }

}
