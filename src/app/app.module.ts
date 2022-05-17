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
import { FormsModule } from '@angular/forms';
import { FarmDialogsComponent } from './farms/farm-dialogs/farm-dialogs.component';
import { GlebeDialogsComponent } from './glebes/glebe-dialogs/glebe-dialogs.component';
import { ProductionDialogsComponent } from './productions/production-dialogs/production-dialogs.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'farms', component: FarmDialogsComponent },
  { path: 'glebes', component: GlebeListComponent },
  { path: 'productions', component: ProductionListComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GlebesComponent,
    GlebeListComponent,
    ProductionsComponent,
    ProductionListComponent,
    FarmsComponent,
    FarmListComponent,
    FarmDialogsComponent,
    GlebeDialogsComponent,
    ProductionDialogsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
