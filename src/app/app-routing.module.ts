import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';
import { SliderComponent } from './slider/slider.component';
import { ListKPComponent } from './list-kp/list-kp.component';
import { TabsAndOtherComponent } from './tabs-and-other/tabs-and-other.component';
import { ListComponent } from './list/list.component';
import { ArticleStepsComponent } from './article-steps/article-steps.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'button', component: ButtonComponent },
      { path: 'slider', component: SliderComponent },
      { path: 'KP', component: ListKPComponent },
      { path: 'tabsAO', component: TabsAndOtherComponent },
      { path: 'list', component: ListComponent },
      { path: 'articleSteps', component: ArticleStepsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
