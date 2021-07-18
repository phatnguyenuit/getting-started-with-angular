import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingsRoutingModule } from './routings-routing.module';
import { RoutingsComponent } from './routings.component';

@NgModule({
  declarations: [RoutingsComponent],
  imports: [CommonModule, RoutingsRoutingModule],
  bootstrap: [RoutingsComponent],
})
export class RoutingsModule {}
