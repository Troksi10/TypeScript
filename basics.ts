// Primmitives

let age: number = 24;

let userName: string = "Ilija";

let isStudent: boolean = true;

// More complex type

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string,
    age: number;
}

let person: Person;

person = {
    name: 'ILija',
    age: 32,
}

let peoople: Person[];

// Type inferece

let course: string | number = 'React = The Complete Guide';

course = 123654;


