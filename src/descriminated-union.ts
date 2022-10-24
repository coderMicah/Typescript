//Descriminated union is apattern when workin with union types that makes implement type guards easier
//TYPE GUARDS are available when working WITH OBJECTS,UNUON TYPES,INTERFACES CAN BE USED ALSO WITH DESCRIMINATION UNIONS

type Bird = {
    type: 'bird'
    flyingSpeed: number
}
type Horse = {
    type: 'horse'
    runningSpeed: number
}
type Animal = Bird | Horse

function animalSpeed(animal: Animal) {
    let speed
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
            break;
    }

    console.log('Animal Speed is : ' + speed);

}

animalSpeed({type:'bird', flyingSpeed:200})
animalSpeed({type:'horse', runningSpeed:130})