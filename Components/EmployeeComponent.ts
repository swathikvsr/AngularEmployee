
import { Component } from "@angular/core";
import { Employee } from "../model/employee"
@Component({
    selector: 'Emloyee-UI',
    templateUrl: '../UI/Employee.html'
})
export class EmployeeComponent {
    currentEmployee: Employee = null;
    constructor() {
        this.currentEmployee = new Employee();
    }
    submit() {
        console.log("Success");
    }
} 