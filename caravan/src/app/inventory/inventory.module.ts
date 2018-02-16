import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { InventoryComponent } from './inventory.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    InventoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InventoryComponent]
})
export class InventoryModule { }
