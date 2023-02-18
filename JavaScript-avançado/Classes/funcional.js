function createPerson(name, lastName, age) {
    return {
        name,   // name = name;
        lastName,
        age,
        getFullName() {
            return `${this.name} ${this.lastName}`;
        } ,
        start() {
            console.log('deu start na pessoa');    // funções não tem contrutores mas vc pode criar uma função para fazer o que vc quiser inicialmente antes de tudo
        }
    }
}

let person1 = createPerson('Lucas', 'Maieski', 26);
let person2 = createPerson('Luan', 'Maieski', 26);

console.log(person1.getFullName());