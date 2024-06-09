const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let onlineProfile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

let currentQuestion = 0;

function askQuestion() {
  rl.question(questions[currentQuestion], (answer) => {
    onlineProfile[`answer${currentQuestion + 1}`] = answer;
    currentQuestion++;

    if (currentQuestion === questions.length) {
      logProfile();
      rl.close();
    } else {
      askQuestion();
    }
  });
}

function logProfile() {
  console.log("\nHere's your profile:\n");
  console.log(`Name: ${onlineProfile.answer1}`);
  console.log(`Activity: ${onlineProfile.answer2}`);
  console.log(`Music: ${onlineProfile.answer3}`);
  console.log(`Favorite Meal: ${onlineProfile.answer4}`);
  console.log(`Favorite Food: ${onlineProfile.answer5}`);
  console.log(`Favorite Sport: ${onlineProfile.answer6}`);
  console.log(`Superpower: ${onlineProfile.answer7}`);
}

askQuestion();
