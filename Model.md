# Object

name: String
picture: Image
bodyPart:
    * Head
    * Hand
    * Torso
    * Legs






Examples :

name: Sword,
picture: sword.png,
bodyPart: Hand,
family: Weapon,
skills: [
    {
        name: Slash,
        type: active,
        target: 1,
        fatigue: 3
        damage: 10,
    }
]


name: Helmet,
picture: helmet.png,
bodyPart: Head,
family: Armor,
armor: 5


name: Shield,
picture: shield.png,
bodyPart: Hand,
family: Armor,
armor: 2,
skills: [
    {
        name: Taunt,
        type: active,
        target: self,
        fatigue: 3,
        duration: 2    
    }
]
