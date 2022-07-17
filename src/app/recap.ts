// Asignación de constantes con multiples tipos de datos
const username: string | number = "josemnr";

// Gracias a Ts la función verifica que los datos requeridos sean del tipo de dato especificado
const sum = (a: number, b:number) => {
    return a + b
}

sum(1, 2);

// Clase persona con su debido constructor
class Person {
    age: number;
    lastName: string;

    constructor(age: number, lastName: string) {
        this.age = age;
        this.lastName = lastName;
    }
}

const pepe = new Person(25, "Pepe")

pepe.age

// Clase persona2 es igual a persona, ahorrando lineas de código
class Person2 {
    constructor(public age: number, public lastName: string) {}
}

const pepe2 = new Person2(25, "Pepe2")

pepe2.lastName;