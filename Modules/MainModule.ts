import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../Components/EmployeeComponent';
import {GridComponent} from "../Components/GridComponent"
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        EmployeeComponent,
        GridComponent
    ],
    bootstrap: [EmployeeComponent]
})
export class MainModule { }
