import { Component } from '@angular/core';

@Component({
  selector: 'inventory-root',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

    characters = [
        {
            name: `Bob`,
            selected: true,
            head: {
                name: 'Helmet1'
            },
            rightHand: {
                name: 'Sword1'
            },
            torso: {
                name: 'Armor1'
            },
            leftHand: {
                name: 'Shield1'
            },
            legs: {
                name: 'Shoes1'
            }
        },
        {
            name: `Big name Several Line`,
            selected: false,
            head: {
                name: 'Helmet2'
            },
            rightHand: {
                name: 'Sword2'
            },
            torso: {
                name: 'Armor2'
            },
            leftHand: {
                name: 'Shield2'
            },
            legs: {
                name: 'Shoes2'
            }
        },
        {
            name: `Alice`,
            selected: false,
            head: {
                name: 'Helmet3'
            },
            rightHand: {
                name: 'Sword3'
            },
            torso: {
                name: 'Armor3'
            },
            leftHand: {
                name: 'Shield3'
            },
            legs: {
                name: 'Shoes3'
            }
        },
        {
            name: `Claude`,
            selected: false,
            head: {
                name: 'Helmet4'
            },
            rightHand: {
                name: 'Sword4'
            },
            torso: {
                name: 'Armor4'
            },
            leftHand: {
                name: 'Shield4'
            },
            legs: {
                name: 'Shoes4'
            }
        }
    ];
    selectedCharacter;
    selectedBodyPart;

    ngOnInit(): void {
        this.selectedCharacter = this.characters[0];
        this.selectedBodyPart = `head`;
    }

    onSelectCharacter(character): void {
        this.characters.forEach(char => {
            char.selected = false;
        });
        character.selected = true;
        this.selectedCharacter = character;
    }

    onSelectItem(bodyPart: string): void {
        this.selectedBodyPart = bodyPart;
    }

}
