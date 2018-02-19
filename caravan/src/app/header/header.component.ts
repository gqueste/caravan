import { Component } from '@angular/core';
import { NavigationService } from '../services/Navigation';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private navigationService: NavigationService){ }

    clickOnInventoryButton(): void {
        this.navigationService.setCurrentScreen(this.navigationService.SCREENS.INVENTORY);
    }

    clickOnFightButton() {
        this.navigationService.setCurrentScreen(this.navigationService.SCREENS.FIGHT);
    }

    clickOnEventButton() {
        this.navigationService.setCurrentScreen(this.navigationService.SCREENS.EVENT);
    }
}
