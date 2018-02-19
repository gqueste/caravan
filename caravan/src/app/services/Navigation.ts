import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavigationService {

    private screenSource = new BehaviorSubject<string>("coucou");
    currentScreen = this.screenSource.asObservable();

    constructor() { }

    setCurrentScreen(screen: string) {
        this.screenSource.next(screen);
    }

}
