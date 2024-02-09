                        // Reference type
var object1 = {value: 10 };
var object2 = object1;
var object3 = {value: 10 };


                        // context or scope
const object4 = {
    a: function() {
        console.log(this);
    }
};

                        // instantiation
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.color = color;
        this.type = type;
    }
}                       
class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }
    sound() {
    console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
    }
}

const cow = new Mamal('samuel', 'cow', 'brown');