import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[] | undefined;
  constructor(private employeeServicee: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeServicee.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }
employeeDetails(id:any){
  this.router.navigate(['employee-details', id]);
}
  updateEmployee(id: any) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id:any){
    this.employeeServicee.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }
}
