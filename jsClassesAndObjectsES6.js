/*ES2015 CLASSES - ES6
with node.js readline()
*/

"uses strict";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


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
//console.log(hp);
hp.getModel();
hp.setModel("Acer");

var xt = new laptop("xt", 256, 15.0);
xt.getMemory();
rl.question('how much memory do you need? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Setting up memory with size : ${answer}`);
  hp.setMemory(answer);
  rl.close();
});
xt.getMemory();
