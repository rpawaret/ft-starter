import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from "./app.component"
import { DashboardModule } from "./dashboard/dashboard.module"
import { AppRoutingModule } from "./app-routing/app-routing.module"
import { AppMenuModule } from "./app-menu/app-menu.module"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    AppRoutingModule,
    AppMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
