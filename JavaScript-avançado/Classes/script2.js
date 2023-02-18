class Person {

    age = 0;  //propriedade / variaveis comuns a todos

    constructor(name) {
        this.name = name; // a propriedade name recebendo a váriavel name
    }
    sayHi() {
        console.log(`${this.name} diz Hi`);
    }
}

class Student extends Person {

    constructor(name, id) {
        super(name);  //executa a função contrutora do pai e pega o name
        this.id = id;
    }
}

let p1 = new Student("Lucas", 1);
p1.age = 20
console.log(`${p1.name} tem ${p1.age} anos e matrícula #${p1.id}`);
p1.sayHi();