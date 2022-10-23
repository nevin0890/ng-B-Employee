import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private api: ApiService) { 
  
    this.fetchEmployee()

  }

  fetchEmployee = () => {
    this.api.ViewEmployee().subscribe((res: any) => {
      this.employees = res;
    })
  }

  deleteEmployee = (id: any) => {
    let data = {
      "id": id
    }
    this.api.DeleteEmployee(data).subscribe((res: any) => {
      console.log(res);
      this.fetchEmployee();
    })
  }

  
  employees: any = [];

  ngOnInit(): void {
  }

}
