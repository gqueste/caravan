import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { HeaderComponent } from '../header/header.component';
import { EventComponent } from '../event/event.component';
import { FightComponent } from '../fight/fight.component';

import { NavigationService } from '../services/Navigation';


@NgModule({
  declarations: [
    MainComponent,
    InventoryComponent,
    HeaderComponent,
    EventComponent,
    FightComponent
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
