import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

import zh from '@angular/common/locales/zh';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { Service } from 'src/services/service';
import { RegionJson } from 'src/Json/Provinces';
import { ButtonComponent } from './button/button.component';
import { SliderComponent } from './slider/slider.component';
import { ListKPComponent } from './list-kp/list-kp.component';
import { TabsAndOtherComponent } from './tabs-and-other/tabs-and-other.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    ButtonComponent,
    SliderComponent,
    ListKPComponent,
    TabsAndOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [Service, RegionJson, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
