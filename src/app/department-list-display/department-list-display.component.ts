import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list-display',
  template: `
    <p>
      department-list-display works!
    </p>
    <ul class ="items">
    <li (click)="onSelect(department)" *ngFor="let department of departmentList">
    {{department.id}} {{department.name}}
    </li>
  </ul>
  <div>
  
  </div>

  `,
  styles: []
})
export class DepartmentListDisplayComponent implements OnInit {

  
  public departmentList =[];
  constructor(private router:Router,private activateroutr :ActivatedRoute) { 
    this.departmentList =[
      {"id":1,"name":"Department1"},
      {"id":2,"name":"Department2"},
      {"id":3,"name":"Department3"},
      {"id":4,"name":"Department4"},
    ]
  }

  ngOnInit() {
  }
  private onSelect(department)
  { 
    console.log(department.id);
    this.router.navigate(['/departmentlist',department.id])
    //this.router.navigate([department.id],{relativeTo:this.activateroutr})
    console.log("Relative Route!!!!!!");
  }

}
