class Person {

    static hands = 2;  // se transforma em um dado geral, não se aplica a um objeto especifico
    age = 0;  //propriedade / variaveis comuns a todos

    constructor(name) {
        this.name = name; // a propriedade name recebendo a váriavel name
    }
    sayHi() {
        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands}`);
    }
}

let p1 = new Person("Lucas");
p1.sayHi();


// Factory cria coisas  