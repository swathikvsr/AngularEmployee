import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../Components/EmployeeComponent';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        EmployeeComponent
    ],
    bootstrap: [EmployeeComponent]
})
export class MainModule { }
