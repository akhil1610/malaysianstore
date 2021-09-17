import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalaysiastoresPage } from './malaysiastores.page';

const routes: Routes = [
  {
    path: '',
    component: MalaysiastoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalaysiastoresPageRoutingModule {}
