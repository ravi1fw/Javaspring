import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatAll } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  id:any;
employee:Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe(data=>{
    this.employee = data;
  },error=>console.log(error));
  }

  updateEmployee(){

  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    },error=>console.log(error));
  }
}
