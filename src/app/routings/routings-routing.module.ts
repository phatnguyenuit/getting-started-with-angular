import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingsComponent } from './routings.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: '',
    component: RoutingsComponent,
    children: [
      {
        path: 'first',
        component: FirstComponent,
      },
      {
        path: 'second',
        component: SecondComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingsRoutingModule {}
