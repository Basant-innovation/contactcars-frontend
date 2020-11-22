import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { HeaderComponent } from './core/header/header.component';
import { InsuranceDescriptionComponent } from './feature/insurance-description/insurance-description.component';
import { InsuranceRequestComponent } from './feature/insurance-request/insurance-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InsuranceDescriptionComponent,
    InsuranceRequestComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
