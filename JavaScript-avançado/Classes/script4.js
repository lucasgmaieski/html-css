class Person {

    age = 0;  //propriedade / variaveis comuns a todos

    constructor(name) {
        this.name = name; // a propriedade name recebendo a váriavel name
    }
   
}
// função que CRIA pessoas
function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

// Factory cria coisas  

let p1 = createPerson('Tadeu', 80);
console.log(`${p1.name} tem ${p1.age} anos.`);