import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { IntentComponent } from './intent/intent.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentListComponent},
  {path : 'employees', component: EmployeeListComponent},
  {path : 'intents', component: IntentComponent},
  {path : 'responses', component: IntentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IntentComponent, EmployeeListComponent, DepartmentListComponent];
