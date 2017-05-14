import {Employee, EmployeeHead} from "../Model/Employee"
import { Injectable } from '@angular/core';

@Injectable()
export class FactoryEmployee
{
    public Create(empType):Employee
    {
        if (empType == "HOD") {
          return new EmployeeHead();
        }
        else {
           return new Employee();
        }
    }
}
