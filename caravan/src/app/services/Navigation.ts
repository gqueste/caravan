import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavigationService {

    SCREENS = {
        'INVENTORY': 'inventory',
        'FIGHT': 'fight',
        'EVENT': 'event'
    };

    private screenSource = new BehaviorSubject<string>(this.SCREENS.INVENTORY);
    currentScreen = this.screenSource.asObservable();

    constructor() { }

    setCurrentScreen(screen: string): void {
        this.screenSource.next(screen);
    }

}
