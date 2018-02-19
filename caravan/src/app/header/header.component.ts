import { Component } from '@angular/core';
import { NavigationService } from '../services/Navigation';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private navigationService: NavigationService){ }

    clickOnInventoryButton() {
        this.navigationService.setCurrentScreen("INVENTORY");
    }
}
