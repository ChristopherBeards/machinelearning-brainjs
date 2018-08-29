const brain = require('brain.js');
const data = require('./data.json');

// * If using a string
// * LTSM: Long Short Term Memory
const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category,
}));

network.train(trainingData, {
  iterations: 2000, // instead of 20,000
});

const output = network.run('I fixed the power supply');
console.log(`Probably Category: ${output}`); // * Output: Probably Category: hardware
