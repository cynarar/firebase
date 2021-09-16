import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolasComponent } from './escolas/escolas.component';

const routes: Routes = [
  { path: 'escolas', component: EscolasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
