import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceRequestComponent } from './insurance-request/insurance-request.component';
import { InsuranceDescriptionComponent } from './insurance-description/insurance-description.component';



@NgModule({
  declarations: [InsuranceRequestComponent, InsuranceDescriptionComponent],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
