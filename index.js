class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    running() {
        console.log(this.neme + this.color)
    };
}
let tiger = new Animal('老虎', '白色');

tiger.running();
