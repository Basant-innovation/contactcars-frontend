import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceDescriptionComponent } from './feature/insurance-description/insurance-description.component';
import { InsuranceRequestComponent } from './feature/insurance-request/insurance-request.component';


const routes: Routes = [
  {
    path:"insurance-request",
    component: InsuranceRequestComponent
  },
  {
    path:"insurance-desription",
    component:InsuranceDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
