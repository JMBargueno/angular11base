import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    MaintenanceComponent
  ],
  imports: [CommonModule, SharedRoutingModule, MatCardModule, MatButtonModule],
  exports: [MatCardModule, NotFoundComponent]
})
export class SharedModule {}
