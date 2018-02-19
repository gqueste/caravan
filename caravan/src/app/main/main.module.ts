import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { HeaderComponent } from '../header/header.component';

import { NavigationService } from '../services/Navigation';


@NgModule({
  declarations: [
    MainComponent,
    InventoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      NavigationService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
