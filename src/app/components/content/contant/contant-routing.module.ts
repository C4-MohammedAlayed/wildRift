import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionRoutingModule } from '../../champions/champion/champion-routing.module';

import { ContentComponent } from '../content.component';

const routes: Routes = [
  { path: '', component: ContentComponent ,  children: [
    {
      path: 'Champions',
      loadChildren: () => import('../../champions/champion/champion-routing.module').then(m => m.ChampionRoutingModule)
    },
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContantRoutingModule { }
