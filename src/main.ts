import { Mitko } from "./mitko";

export class Main {
    person = new Mitko();
    
    constructor() {
        this.newPerson('Mitko', 'Mitev', 27);
    }

    newPerson(firstName, lastName, age){
        this.person.firstName = firstName;
        this.person.lastName = lastName;
        this.person.age = age;
        return this.person;
    }

    
}