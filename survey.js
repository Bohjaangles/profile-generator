const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what kind of name do you want around here? ', (answer1) => {
  rl.question('what are you most frequently finding yourself up to?', (answer2) => {
    rl.question('where are you from?', (answer3) => {
      rl.question('tell me that noun that makes you the most angry?', (answer4) => {
        console.log(`${answer1}, who hails from ${answer3}, really doesn\'t want to talk or even think about ${answer4}. That is fair, we won\'t make em! Though they are often ${answer2} so talk to them about that maybe`);
     
        rl.close();
      })
    })
  })
});