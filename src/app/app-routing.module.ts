import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'button', component: ButtonComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
