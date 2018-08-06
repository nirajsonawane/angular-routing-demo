import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListDisplayComponent } from './department-list-display/department-list-display.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  //{ path: '',component:DepartmentListComponent},
  //{ path: '', redirectTo: "/departments" , pathMatch:"prefix"},
  { path: '', redirectTo: "/departments" , pathMatch:"full"},
  { path: 'departments',component:DepartmentListComponent},
  { path:'employees', component:EmployeeListComponent},
  {path :'departmentlist',component:DepartmentListDisplayComponent},
  {path :'departmentlist/:id',component:DepartmentDetailsComponent},
  {path:"**",     component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
