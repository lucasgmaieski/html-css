class Person {

    _age = 0;  //propriedade / variaveis comuns a todos
    steps = 0;

    constructor(name, age) {
        this.name = name; // a propriedade name recebendo a váriavel name
    }

    takeAStep() {
        this.steps++;
    }

    get age() {
        return this._age
    }
    set age(x) {
        if(typeof x === 'number') {
            this._age = x
        }
    }
}


let p1 = new Person("João");  //instanciando um objeto
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.takeAStep();
p1.age = 20;
console.log(` ${p1.name}: ${p1.age}`);

