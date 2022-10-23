import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private api: ApiService) { }

  name = ''
  email = ''
  address = ''
  dob = ''
  company=''
  salary = ''

  
  readValues= () => {
    let data = {
      name: this.name,
      email: this.email,
      address: this.address,
      dob: this.dob,
      company: this.company,
      salary: this.salary
    }
    this.api.AddEmployee(data).subscribe((res: any) => {
      console.log(res);
    })
    alert("Employee Added Successfully");
    this.name = ''
    this.email = ''
    this.address = ''
    this.dob = ''
    this.company = ''
    this.salary = ''
    
  }



  ngOnInit(): void {
  }

}
