import { Component } from '@angular/core';
import { NavigationService } from '../services/Navigation';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    currentScreen;

    constructor(private navigationService: NavigationService) {}

    ngOnInit() {
        this.navigationService.currentScreen
            .subscribe(screen => this.currentScreen = screen);
    }

    isScreenInventory(): boolean {
        return this.currentScreen === this.navigationService.SCREENS.INVENTORY;
    }

    isEventInventory(): boolean {
        return this.currentScreen === this.navigationService.SCREENS.EVENT;
    }

    isFightInventory(): boolean {
        return this.currentScreen === this.navigationService.SCREENS.FIGHT;
    }

}
