import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMenuRoutingModule } from './app-menu-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [NavBarComponent, SideBarComponent],
  imports: [
    CommonModule,
    AppMenuRoutingModule
  ],
  exports: [NavBarComponent, SideBarComponent]
})
export class AppMenuModule { }
