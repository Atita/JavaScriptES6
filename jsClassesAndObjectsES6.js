//ES2015 CLASSES - ES6
"uses strict";

class laptop {

  //constructor  
  constructor(model, memory, screen) {
      this.model = model, this.memory = memory, this.screen = screen;

    }
    //getters and setters
  getModel() {
    return console.log(this.model);

  }
  setModel(model) {
    this.model = model;
    this.getModel();

  }

  getMemory() {
    return console.log(this.memory);
  }
  setMemory(memory) {
    this.memory = memory;
    this.getMemory();
  }

}

var hp = new laptop("hp", 512, 13.3);
hp.getModel();
hp.setModel("Acer");

var xt = new laptop("xt", 256, 15.0);
xt.getMemory();
hp.setMemory(1024);
xt.getMemory();
