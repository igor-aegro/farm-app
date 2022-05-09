import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GlebesComponent } from './glebes/glebes.component';
import { GlebeListComponent } from './glebes/glebe-list/glebe-list.component';
import { ProductionsComponent } from './productions/productions.component';
import { ProductionListComponent } from './productions/production-list/production-list.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmListComponent } from './farms/farm-list/farm-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GlebesComponent,
    GlebeListComponent,
    ProductionsComponent,
    ProductionListComponent,
    FarmsComponent,
    FarmListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
