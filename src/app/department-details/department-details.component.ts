import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  private departmentId;
  constructor(private rout : ActivatedRoute,private router : Router) {

   }

  ngOnInit() {
    //this.id = parseInt(this.rout.snapshot.paramMap.get('id'));
    this.rout.paramMap.subscribe((params:ParamMap)=>{
      let tempId= parseInt(params.get('id'));
      this.departmentId=tempId;
    })
    
  }
  next()
  {
    let nextid=this.departmentId+1;
    console.log(nextid)
    this.router.navigate(['/departmentlist',nextid]);
  }
  previous()
  {
   let nextid=this.departmentId-1;
    console.log(nextid)
    this.router.navigate(['/departmentlist',nextid]);
  }
  next2()
  {
    console.log("goToDepartment")
    let selectedID= this.departmentId;
    this.router.navigate(['/departmentlist', { id: selectedID } ]);
  }

}
